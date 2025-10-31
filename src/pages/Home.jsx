import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Welcome to the Dog & Dice App!</h1>
      <p>Explore our dogs or roll a dice!</p>
      <Link to="/dogs">See our dogs </Link>
      <br />
      <Link to="/dice">Roll a dice </Link>
    </div>
  );
}
