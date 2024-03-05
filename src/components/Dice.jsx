import React, { useState } from 'react'
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
      diceImages[Math.floor(Math.random() * diceImages.length)]
    );
      const rollDice = () => {
        setCurrentDice(diceEmpty);
        setTimeout(() => {
          const newDice =
            diceImages[Math.floor(Math.random() * diceImages.length)];
          setCurrentDice(newDice);
        }, 1000);
      };
  return (
    <img
      src={currentDice}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: "pointer", width: "100px", height: "100px" }}
    />
  );
}
