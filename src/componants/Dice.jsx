import { useState } from "react";
import diceEmpty from "../assets/dice-empty.png";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [currentDice, setCurrentDice] = useState(dice3);

  const rollDice = () => {
    setCurrentDice(diceEmpty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setCurrentDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      alt="Dice"
      onClick={rollDice}
      className="w-24 cursor-pointer"
    />
  );
}

export default Dice;
