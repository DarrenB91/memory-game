import React from "react";
import { useState } from "react";
import "../style/card.css";
import { useEffect } from "react";

function Card({ name, image, onClick }) {
  const [pressStatus, setPressStatus] = useState("unpressed");

  const handleCardClick = () => {
    if (pressStatus === "pressed") {
      onClick("endGame");
    } else {
      setPressStatus("pressed");
      onClick("incrementScore");
    }
  };

  return (
    <div onClick={() => onClick(dog)} className="card-container">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
