import { useState } from "react";
import diceBlank from "../assets/images/dice-empty.png";
import one from "../assets/images/dice1.png";
import two from "../assets/images/dice2.png";
import three from "../assets/images/dice3.png";
import four from "../assets/images/dice4.png";
import five from "../assets/images/dice5.png";
import six from "../assets/images/dice6.png";

export default function Dice() {
  const [diceValue, setDiceValue] = useState(diceBlank);
  const dice = [one, two, three, four, five, six];
  const randomDice = dice[Math.floor(Math.random() * dice.length)];

  const rollDice = () => {
    setDiceValue(diceBlank);
    setTimeout(() => {
      setDiceValue(randomDice);
      console.log(diceValue);
    }, 1000);
  };
  return (
    <div>
      <img
        onClick={rollDice}
        style={{ height: "100px" }}
        src={diceValue}
        alt="dice"
      />
    </div>
  );
}
