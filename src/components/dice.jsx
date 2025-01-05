import { useState } from "react";

const Dice = () => {
  const diceImages = [
    "../assets/images/dice1.png",
    "../assets/images/dice2.png",
    "../assets/images/dice3.png",
    "../assets/images/dice4.png",
    "../assets/images/dice5.png",
    "../assets/images/dice6.png",
  ];

  const [dice, setDice] = useState("../assets/images/dice-empty.png");

  const rollDice = () => {
    setDice("../assets/images/dice-empty.png");
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDice(diceImages[randomIndex]);
    }, 1000);
  };

  return <img src={dice} alt="Dice" onClick={rollDice} style={{ cursor: "pointer" }} />;
};

export default Dice;
