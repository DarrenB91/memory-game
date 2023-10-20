import React, { useState, useEffect } from "react";
import Card from "./Card";
import CardChooser from "../utils/cardchooser";
import dogsData from "../assets/dogs.json";

function CardList({onClick}) {
  const [selectedDogs, setSelectedDogs] = useState([]);

  useEffect(() => {
    const initialDogs = CardChooser(dogsData);
    setSelectedDogs(initialDogs);
  }, []);

  return (
    <div className="dogboard">
      {selectedDogs.map((dog) => (
        <Card onClick={onClick} key={dog.name} name={dog.name} image={dog.image} />
      ))}
    </div>
  );
};

export default CardList;
