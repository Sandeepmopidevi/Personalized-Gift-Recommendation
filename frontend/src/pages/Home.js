import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="content">
                <h1 className="title">🎁 Personalized Gift Recommender</h1>
                <p className="subtitle">
                    Find the perfect gift based on interests and personality.
                </p>
                <button className="start-btn" onClick={() => navigate("/quiz")}>
                    Start Quiz 🚀
                </button>
            </div>
        </div>
    );
};

export default Home;
