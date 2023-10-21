import React, { useState } from "react";
import "../style/card.css";

function Card({ name, image, onClick }) {
  const [pressStatus, setPressStatus] = useState("unpressed");

  const handleCardClick = () => {
    if (pressStatus === "pressed") {
      onClick("end");
    } else {
      setPressStatus("pressed");
      onClick("score");
    }
  };

  return (
    <div onClick={handleCardClick} className="card-container">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
