import { useState } from "react";
import Scoreboard from "./Scoreboard";
import "../style/App.css";
import CardList from "./CardList";

function App() {
  const [score, setScore] = useState(0);

  const handleCardClick = (action) => {
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
      <CardList />
    </>
  );
}

export default App;
