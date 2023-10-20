import React from "react";
import { useState } from "react";
import "../style/card.css";
import { useEffect } from "react";

function Card({ name, image, onClick }) {
  const [pressStatus, setPressStatus] = useState("unpressed");

  const handleCardClick = () => {
    if (pressStatus === "pressed") {
      console.log("I have been pressed again");
      onClick("endGame");
    } else {
      console.log("First Press");
      setPressStatus("pressed");
      onClick("incrementScore");
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
