import React from "react";

function Scoreboard({ currentStreak }) {
  return (
    <>
      <p className="scoreboard"> Current Streak = {currentStreak}</p>
    </>
  );
}

export default Scoreboard;
