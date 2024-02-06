import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import diceOne from "../assets/images/dice1.png";
import diceTwo from "../assets/images/dice2.png";
import diceThree from "../assets/images/dice3.png";
import diceFour from "../assets/images/dice4.png";
import diceFive from "../assets/images/dice5.png";
import diceSix from "../assets/images/dice6.png";

function Dice() {
  const dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  const randomDice = dices[Math.floor(Math.random() * dices.length)];

  const [randomizeDice, setRandomizeDice] = useState(randomDice);

  const randomizer = () => {
    setRandomizeDice(diceEmpty);
    setTimeout(() => {
      setRandomizeDice(randomDice);
    }, 1000);
  };

  return (
    <img
      src={randomizeDice}
      alt=""
      onClick={randomizer}
      style={{ height: "50px" }}
    />
  );
}

export default Dice;
