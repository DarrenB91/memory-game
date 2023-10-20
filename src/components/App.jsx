import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import CardList from "./CardList";
import CardChooser from "../utils/cardchooser";
import dogsData from "../assets/dogs.json";
import "../style/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [selectedDogs, setSelectedDogs] = useState([]);

  const shuffleDogs = () => {
    const newSelectedDogs = CardChooser(dogsData);
    setSelectedDogs(newSelectedDogs);
  };

  useEffect(() => {
    shuffleDogs();
  }, []);

  const handleCardClick = (action) => {
    shuffleDogs();

    if (action === "endGame") {
      alert(`Game Over! Your score: ${score}`);
      setScore(0);
    } else if (action === "incrementScore") {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      <Scoreboard currentStreak={score} />
      <CardList dogs={selectedDogs} onClick={handleCardClick} />
    </>
  );
}

export default App;
