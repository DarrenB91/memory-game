import { useState } from "react";
import Scoreboard from "./Scoreboard";
import "../style/App.css";
import CardList from "./CardList";

function App() {
  const [score, setScore] = useState(0);
  const [gameId, setGameId] = useState(1);

  function resetGame() {
    setScore(0);
    setGameId((prevGameId) => prevGameId + 1);
  }

  const handleCardClick = (action) => {
    if (action === "endGame") {
      alert(`Game Over! Your score: ${score}`);
      resetGame();
    } else if (action === "incrementScore") {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      <Scoreboard currentStreak={score} />
      <CardList key={gameId} onClick={handleCardClick} />
    </>
  );
}

export default App;
