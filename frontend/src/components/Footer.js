import React from "react";
import "./styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Personalized Gift Recommender</p>
        </footer>
    );
};

export default Footer;