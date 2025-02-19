import React from "react";
import "./LionCard.css";

const LionCard = ({ image }) => {
    return (
        <div className="lion-card">
            <img src={image} alt="Лев" className="lion-image" />
            <h3>Король зверей</h3>
        </div>
    );
};

export default LionCard;