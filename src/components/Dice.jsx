import React, { useState } from "react";

const Dice = () => {
  const [currentDiceImage, setCurrentDiceImage] = useState(
    "src/assets/images/dice3.png"
  );
  const diceImages = [
    "src/assets/images/dice1.png",
    "src/assets/images/dice2.png",
    "src/assets/images/dice3.png",
    "src/assets/images/dice4.png",
    "src/assets/images/dice5.png",
    "src/assets/images/dice6.png",
  ];

  const rollDice = () => {
    setCurrentDiceImage("src/assets/images/dice-empty.png");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentDiceImage(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div onClick={rollDice}>
      <img src={currentDiceImage} alt="dice" />
    </div>
  );
};

export default Dice;
