import { useState } from "react";
import "./Dice.css";

import diceEmpty from "./../../assets/images/dice-empty.png";
import diceOne from "./../../assets/images/dice1.png";
import diceTwo from "./../../assets/images/dice2.png";
import diceThree from "./../../assets/images/dice3.png";
import diceFour from "./../../assets/images/dice4.png";
import diceFive from "./../../assets/images/dice5.png";
import diceSix from "./../../assets/images/dice6.png";

const Dice = () => {
  const [currentDice, setCurrentDice] = useState(diceThree);

  const handleClick = () => {
    setCurrentDice(diceEmpty);
    setTimeout(() => {
      const diceImages = [
        diceOne,
        diceTwo,
        diceThree,
        diceFour,
        diceFive,
        diceSix,
      ];
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div className="dice-container" onClick={handleClick}>
      <img src={currentDice} alt="Dice" className="image" />
    </div>
  );
};

export default Dice;
