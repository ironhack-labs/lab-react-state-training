import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceImages = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [currentImage, setCurrentImage] = useState(diceImages[0]);

  const rollDice = () => {
    setCurrentImage(diceImages[0]);

    setTimeout(() => {
      const randomDiceValue = Math.floor(Math.random() * 6) + 1;
      setCurrentImage(diceImages[randomDiceValue]);
    }, 1000);
  };

  return (
    <img
      src={currentImage}
      alt="Dice"
      style={{ width: "100px", height: "100px", cursor: "pointer" }}
      onClick={rollDice}
    />
  );
};

export default Dice;
