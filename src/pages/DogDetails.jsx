import React from "react";
import { useParams, Link } from "react-router-dom";

const dogs = [
  { id: 1, name: "Buddy", breed: "Golden Retriever", age: 3, description: "Loves to play fetch and swim." },
  { id: 2, name: "Luna", breed: "Border Collie", age: 2, description: "Very smart and full of energy." },
  { id: 3, name: "Rocky", breed: "German Shepherd", age: 4, description: "Loyal and protective companion." },
  { id: 4, name: "Bella", breed: "Labrador Retriever", age: 1, description: "Sweet and loves everyone she meets." },
  { id: 5, name: "Max", breed: "Beagle", age: 5, description: "Curious and loves to sniff everything." },
];

export default function DogDetails() {
  const { dogId } = useParams();
  const dog = dogs.find((d) => d.id === parseInt(dogId));

  if (!dog) {
    return (
      <div>
        <h2>Dog not found </h2>
        <Link to="/dogs">Back to all dogs</Link>
      </div>
    );
  }

  return (
    <div className="dog-details">
      <h1>{dog.name}</h1>
      <h3>{dog.breed}</h3>
      <p>Age: {dog.age}</p>
      <p>{dog.description}</p>
      <Link to="/dogs">← Back to all dogs</Link>
    </div>
  );
}

