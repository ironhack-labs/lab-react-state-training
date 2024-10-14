// src/components/Dice.jsx

import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png"; // Path to empty dice image
import dice1 from "../assets/images/dice1.png"; // Path to dice images 1-6
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import "./Dice.css"; // Import styles if necessary

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [dice, setDice] = useState(diceEmpty); // Start with empty dice

  const rollDice = () => {
    setDice(diceEmpty); // Show empty dice immediately
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDice(diceImages[randomIndex]); // Set random dice image after 1 second
    }, 1000);
  };

  return (
    <div className="dice" onClick={rollDice}>
      <img src={dice} alt="Dice" />
    </div>
  );
}

export default Dice;
