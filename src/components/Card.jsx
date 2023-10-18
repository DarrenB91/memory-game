import React from "react";
import { useState } from "react";
import "../style/card.css";
import { useEffect } from "react";

function Card({ onClick }) {
  const [pressStatus, setPressStatus] = useState("unpressed");
  const [dogdata, setDogData] = useState(null);
  const [errorState, setErrorState] = useState(null);

  const handleCardClick = () => {
    if (pressStatus === "pressed") {
      onClick("endGame");
    } else {
      setPressStatus("pressed");
      onClick("incrementScore");
    }
  };

  if (!dogdata) {
    return <p>Loading...</p>;
  }

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
