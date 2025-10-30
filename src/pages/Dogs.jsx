import React, { useState } from "react";
import { Link } from "react-router-dom";

const dogs = [
  { id: 1, name: "Buddy", breed: "Golden Retriever" },
  { id: 2, name: "Luna", breed: "Border Collie" },
  { id: 3, name: "Rocky", breed: "German Shepherd" },
  { id: 4, name: "Bella", breed: "Labrador Retriever" },
  { id: 5, name: "Max", breed: "Beagle" },
];

export default function Dogs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDogs = dogs.filter(
    (dog) =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dogs-page">
      <h1>Meet all our dogs!</h1>
      <input
        type="text"
        placeholder="Search dogs by name or breed..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <ul>
        {filteredDogs.length > 0 ? (
          filteredDogs.map((dog) => (
            <li key={dog.id}>
              <Link to={`/dogs/${dog.id}`}>{dog.name}</Link> – {dog.breed}
            </li>
          ))
        ) : (
          <p>No dogs found </p>
        )}
      </ul>
    </div>
  );
}


