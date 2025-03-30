import { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";

const diceImages = [
  "../assets/images/dice1.png",
  "../assets/images/dice2.png",
  "../assets/images/dice3.png",
  "../assets/images/dice4.png",
  "../assets/images/dice5.png",
  "../assets/images/dice6.png",
];

function Dice() {
  const [dice, setDice] = useState(diceImages[0]);

  const rollDice = () => {
    setDice(emptyDice);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <img
      src={dice}
      alt="dice"
      onClick={rollDice}
      style={{ width: "100px", cursor: "pointer" }}
    />
  );
}

export default Dice;