import React, { useState, useEffect } from "react";
import Card from "./Card";
import CardChooser from "../utils/cardchooser";
import dogsData from "../assets/dogs.json";

const CardList = () => {
  const [selectedDogs, setSelectedDogs] = useState([]);

  useEffect(() => {
    const initialDogs = CardChooser(dogsData);
    setSelectedDogs(initialDogs);
  }, []);

  return (
    <div>
      {selectedDogs.map((dog) => (
        <Card key={dog.name} name={dog.name} image={dog.image} />
      ))}
    </div>
  );
};

export default CardList;
