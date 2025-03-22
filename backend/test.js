import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY || "YOUR_API_KEY_HERE"; // Replace with your key

async function testOpenAIKey() {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello, are you working?" }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    console.log("✅ API Key is working! Response:", response.data);
  } catch (error) {
    console.error("❌ API Key is not working! Error:", error.response?.data || error.message);
  }
}

testOpenAIKey();
