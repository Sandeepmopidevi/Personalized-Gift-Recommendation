import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import "./styles/quiz.css";

const Quiz = () => {
    const navigate = useNavigate();
    const nodeRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [recipientDetails, setRecipientDetails] = useState({
        age: "",
        gender: "",
        hobbies: "",
        occasion: "",
        relationship: "",
    });

    useEffect(() => {
        setVisible(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleChange = (e) => {
        setRecipientDetails({ ...recipientDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Validate input fields before sending request
        if (!recipientDetails.age || !recipientDetails.gender || !recipientDetails.hobbies || !recipientDetails.occasion || !recipientDetails.relationship) {
            setError("⚠️ Please fill in all fields before submitting.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/recommend", recipientDetails);

            if (response.data.recommendations) {
                localStorage.setItem("recommendations", JSON.stringify(response.data.recommendations));
                navigate("/results");
            } else {
                setError("❌ No recommendations found. Try again with different details.");
            }
        } catch (error) {
            console.error("Error fetching recommendations:", error.response?.data || error.message);
            setError("❌ Error fetching recommendations. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <CSSTransition in={visible} timeout={500} classNames="fade" unmountOnExit nodeRef={nodeRef}>
            <div ref={nodeRef} className="quiz-container">
                <h2 className="quiz-title">🎯 Tell us about the recipient</h2>

                {error && <p className="error-message">{error}</p>}

                <label>Age:</label>
                <input 
                    type="number" 
                    name="age" 
                    value={recipientDetails.age} 
                    onChange={handleChange} 
                    placeholder="Enter age" 
                    min="1"
                />

                <label>Gender:</label>
                <select name="gender" value={recipientDetails.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label>Hobbies/Interests:</label>
                <input 
                    type="text" 
                    name="hobbies" 
                    value={recipientDetails.hobbies} 
                    onChange={handleChange} 
                    placeholder="e.g., Music, Gaming, Books" 
                />

                <label>Occasion:</label>
                <select name="occasion" value={recipientDetails.occasion} onChange={handleChange}>
                    <option value="">Select Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Christmas">Christmas</option>
                    <option value="Other">Other</option>
                </select>

                <label>Relationship with recipient:</label>
                <select name="relationship" value={recipientDetails.relationship} onChange={handleChange}>
                    <option value="">Select Relationship</option>
                    <option value="Friend">Friend</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Parent">Parent</option>
                    <option value="Spouse/Partner">Spouse/Partner</option>
                    <option value="Colleague">Colleague</option>
                    <option value="Other">Other</option>
                </select>

                <button 
                    className="submit-btn" 
                    onClick={handleSubmit} 
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Get Recommendations"}
                </button>
            </div>
        </CSSTransition>
    );
};

export default Quiz;
