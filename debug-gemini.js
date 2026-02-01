// debug-gemini.js
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GEMINI_API_KEY;

async function checkAvailableModels() {
  console.log("Checking API Key:", API_KEY ? "Loaded" : "MISSING");
  
  if (!API_KEY) {
    console.error("❌ ERROR: No API Key found in .env file");
    return;
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  
  // Try the most standard model first
  console.log("\n--- Attempting to use 'gemini-pro' ---");
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Hello, are you working?");
    console.log("✅ SUCCESS! 'gemini-pro' is working.");
    console.log("Response:", result.response.text());
  } catch (error) {
    console.error("❌ FAILED with 'gemini-pro':");
    console.error("Error Code:", error.status);
    console.error("Message:", error.message);
  }

  // Try the specific 1.0 version (often fixes 404s)
  console.log("\n--- Attempting to use 'gemini-1.0-pro' ---");
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
    const result = await model.generateContent("Test");
    console.log("✅ SUCCESS! 'gemini-1.0-pro' is working.");
  } catch (error) {
    console.error("❌ FAILED with 'gemini-1.0-pro':", error.message);
  }
}

checkAvailableModels();