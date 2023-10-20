import React from "react";
import Card from "./Card";

function CardList({ dogs, onClick }) {
  return (
    <div className="dogboard">
      {dogs.map((dog) => (
        <Card key={dog.name} name={dog.name} image={dog.image} onClick={onClick} />
      ))}
    </div>
  );
}

export default CardList;
