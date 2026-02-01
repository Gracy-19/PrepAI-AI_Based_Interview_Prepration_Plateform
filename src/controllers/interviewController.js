// controllers/interviewController.js
const QuestionAnswer = require('../models/questionAnswerModel');
const Space = require('../models/spaceModel');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Global API key
const API_KEY = process.env.GEMINI_API_KEY;

// ---------------------------------------------------------
// CONFIGURATION
// We use 'gemini-2.0-flash-lite' because your logs confirmed you have access to it.
// If this fails, the code will automatically switch to Mock Data.
const MODEL_NAME = "gemini-flash-latest"; 
// ---------------------------------------------------------

console.log('Gemini API Key loaded:', API_KEY ? `Yes (${API_KEY.substring(0, 5)}...)` : 'NO - CHECK .ENV FILE!');

// 1. START ROUND (With Fail-Safe)
exports.startRound = async (req, res) => {
    try {
        const { spaceId, roundName } = req.params;
        const space = await Space.findById(spaceId);

        if (!space) return res.status(404).json({ error: 'Space not found' });

        try {
            console.log(`🚀 Requesting Questions (Model: ${MODEL_NAME})...`);
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });

            const prompt = `
            Job Role: ${space.jobPosition}
            Company: ${space.companyName}
            Round: ${roundName}
            Generate exactly 2 interview questions.
            Format:
            1. [Question]
            2. [Question]
            `;

            const result = await model.generateContent(prompt);
            const questions = result.response.text()
                .split('\n')
                .filter(q => /^\d+\.\s/.test(q.trim())); 

            console.log('✅ AI Success:', questions);
            res.json({ questions });

        } catch (aiError) {
            console.error(`⚠️ AI Failed (${aiError.status || aiError.message}). Using Mock Data.`);
            
            // FALLBACK DATA
            const mockQuestions = [
                `1. (Mock) Can you tell me about a time you demonstrated leadership at ${space.companyName || 'your previous job'}?`,
                `2. (Mock) How do your skills in ${space.jobPosition} align with this role?`,
                `3. (Mock) Describe a technical challenge you overcame recently.`
            ];
            
            res.json({ questions: mockQuestions });
        }
    } catch (err) {
        console.error('System Error:', err);
        res.status(500).json({ error: 'System error' });
    }
};

// 2. GET ANSWERS (Database only, no AI)
exports.getQuestionsAnswers = async (req, res) => {
    try {
        const { roundId } = req.params;
        const space = await Space.findOne({ 'interviewRounds._id': roundId });
        
        if (!space) return res.status(404).json({ error: 'Round not found' });
        
        const roundName = space.interviewRounds.find(r => r._id.toString() === roundId).name;
        const questionsAnswers = await QuestionAnswer.find({
            spaceId: space._id,
            roundName: roundName
        }).sort({ createdAt: 1 });
        
        res.json(questionsAnswers);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Error fetching data' });
    }
};

// 3. FINISH ROUND (With Fail-Safe Summary)
exports.finishRound = async (req, res) => {
    try {
        const { spaceId, roundName } = req.params;
        const { answers } = req.body;

        // Save answers first
        const questionsAndAnswers = Object.entries(answers).map(([question, answer]) => ({
            spaceId, roundName, question, answer,
        }));
        await QuestionAnswer.insertMany(questionsAndAnswers);

        let summary = "Interview completed successfully.";

        try {
            console.log("🚀 Generating Summary...");
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });
            
            const prompt = `Summarize this interview:\n${Object.entries(answers).map(([q, a]) => `Q: ${q}\nA: ${a}\n`).join('')}`;
            const result = await model.generateContent(prompt);
            summary = result.response.text();
            console.log("✅ Summary Generated");

        } catch (aiError) {
            console.error("⚠️ AI Summary Failed. Using default text.");
            summary = "Evaluation pending (AI Service Unavailable). Great effort on completing the round!";
        }

        const space = await Space.findById(spaceId);
        const round = space.interviewRounds.find((r) => r.name === roundName);
        round.summary = summary;
        round.status = 'completed';

        await space.save();
        res.status(200).json({ message: 'Round completed.', summary });
    } catch (err) {
        console.error('Error finishing round:', err);
        res.status(500).json({ error: 'Error finishing round' });
    }
};

// 4. FOLLOW UP (With Fail-Safe)
exports.generateFollowUpQuestions = async (req, res) => {
    try {
        const { questionId } = req.params;
        const qa = await QuestionAnswer.findById(questionId);

        if (!qa) return res.status(404).json({ error: 'Question not found' });

        try {
            console.log("🚀 Generating Follow-up...");
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });

            const prompt = `Original Q: "${qa.question}"\nStudent Answer: "${qa.answer}"\nAsk a short follow-up question.`;
            const result = await model.generateContent(prompt);
            const followUpQuestion = result.response.text().trim();

            await QuestionAnswer.create({
                spaceId: qa.spaceId,
                roundName: qa.roundName,
                question: followUpQuestion,
                isFollowUp: true,
            });
            
            res.status(200).json({ message: 'Generated.', question: followUpQuestion });

        } catch (aiError) {
            console.error("⚠️ AI Follow-up Failed. Using generic question.");
            
            const genericFollowUp = "Could you elaborate more on that point?";
            await QuestionAnswer.create({
                spaceId: qa.spaceId,
                roundName: qa.roundName,
                question: genericFollowUp,
                isFollowUp: true,
            });

            res.status(200).json({ message: 'Generated (Mock).', question: genericFollowUp });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Error generating follow-up' });
    }
};