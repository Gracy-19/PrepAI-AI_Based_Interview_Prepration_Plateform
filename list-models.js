// list-models.js
require('dotenv').config();

const API_KEY = process.env.GEMINI_API_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

console.log(`Checking models for key ending in ...${API_KEY ? API_KEY.slice(-5) : 'NONE'}`);

fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.error) {
        console.error("❌ API ERROR:", data.error.message);
    } else if (data.models) {
        console.log("\n✅ AVAILABLE MODELS (Copy one of these exactly):");
        console.log("------------------------------------------------");
        // Filter for "generateContent" supported models
        const chatModels = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));
        chatModels.forEach(m => {
            console.log(`Model: "${m.name.replace('models/', '')}"`);
        });
        console.log("------------------------------------------------");
    } else {
        console.log("No models found. Response:", data);
    }
  })
  .catch(err => console.error("Network Error:", err));