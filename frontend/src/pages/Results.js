import React from "react";
import "./styles/results.css";

function Results() {
    const storedData = localStorage.getItem("recommendations");

    let recommendationText = "No recommendations available. Please try again.";
    try {
        const parsedData = JSON.parse(storedData);
        
        if (Array.isArray(parsedData) && parsedData.length > 0) {
            recommendationText = parsedData[0]; // Display first recommendation as heading
        } else if (typeof parsedData === "string") {
            recommendationText = parsedData; // Directly use string data
        }
    } catch (error) {
        console.error("Error parsing recommendations:", error);
    }

    return (
        <div className="results-container">
            <h2>🎁 Gift Recommendation</h2>
            <h3 className="recommendation-text">{recommendationText}</h3>
        </div>
    );
}

export default Results;
