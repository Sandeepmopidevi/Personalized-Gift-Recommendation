import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const HF_API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-large";

// Gift Recommendation Endpoint
app.post("/api/recommend", async (req, res) => {
    try {
        const { age, gender, hobbies, occasion, relationship } = req.body;

        // Validate input fields
        if (!age || !gender || !hobbies || !occasion || !relationship) {
            return res.status(400).json({ error: "⚠️ Missing required fields. Please fill in all details." });
        }

        // Construct prompt for the AI
        const prompt = `Suggest a thoughtful and meaningful gift for a ${age}-year-old ${gender} who enjoys ${hobbies}. 
                        The occasion is ${occasion}, and the recipient is their ${relationship}. 
                        The gift should be unique, exciting, and within a reasonable budget.`;

        console.log("🎁 Generating gift recommendation for:", req.body);

        // Make a request to Hugging Face API
        const response = await axios.post(
            HF_API_URL,
            { inputs: prompt },
            { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
        );

        console.log("✅ Hugging Face Response:", response.data);

        // Extract recommendation
        let recommendation = "❌ Couldn't generate a recommendation. Try again.";
        if (response.data?.generated_text) {
            recommendation = response.data.generated_text;
        } else if (Array.isArray(response.data) && response.data[0]?.generated_text) {
            recommendation = response.data[0].generated_text;
        }

        return res.json({ recommendations: recommendation });

    } catch (error) {
        console.error("❌ API Error:", error.response?.data || error.message);

        // Fallback recommendations in case of API failure
        const fallbackRecommendations = [
            "A personalized mug with their name engraved.",
            "A smart gadget like a smartwatch or wireless earbuds.",
            "A subscription box related to their hobbies.",
            "A handwritten letter with a heartfelt message.",
            "A book in their favorite genre.",
        ];

        return res.status(500).json({
            error: "Failed to fetch recommendations. Using fallback options.",
            recommendations: fallbackRecommendations[Math.floor(Math.random() * fallbackRecommendations.length)]
        });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
