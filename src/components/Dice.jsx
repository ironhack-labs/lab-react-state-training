import React, { useState } from "react";
import "./Dice.css";

import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png";

function Dice() {
  const [diceImage, setDiceImage] = useState(dice1);

  const rollDice = () => {
    // First show the empty dice
    setDiceImage(diceEmpty);

    // After 1 second, show a random dice
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6);

      const diceImages = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
      ];

      setDiceImage(diceImages[randomNumber]);
    }, 1000);
  };

  return (
    <div className="dice">
      <img
        src={diceImage}
        alt="Dice"
        onClick={rollDice}
      />
    </div>
  );
}

export default Dice;