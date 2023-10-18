import React from "react";
import { useState } from "react";
import "../style/card.css";
import { useEffect } from "react";

function Card({ onClick }) {
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
    <>
      <div onClick={handleCardClick} className="card-container">
        <img src={dogdata.image} alt={dogdata.name} />
        <p>{dogdata.name}</p>
      </div>
    </>
  );
}

export default Card;
