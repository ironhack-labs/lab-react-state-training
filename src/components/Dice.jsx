import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export default function Dice() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentDice, setCurrentDice] = useState(
    diceImages[Math.floor(Math.random() * 6)]
  );

  const handleClick = () => {
    setCurrentDice(diceEmpty);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setCurrentDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div className="dice-container" style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Roll the Dice!</h1>
      <img
        src={currentDice}
        alt="Dice"
        onClick={handleClick}
        style={{
          width: "150px",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
      />
      <p>Click the dice to roll again 🎲</p>
    </div>
  );
}
