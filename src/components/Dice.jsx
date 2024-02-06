import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice6.png";
import dice6 from "../assets/images/dice6.png";
import emptyDice from "../assets/images/dice-empty.png";

export default function Dice() {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomNumber = Math.floor(Math.random() * 5);
  const [dice, setDice] = useState(dices[randomNumber]);

  function rollDice() {
    setDice(emptyDice);
    setTimeout(() => setDice(dices[randomNumber]), 1000);
  }

  return <img className="Dice" src={dice} onClick={rollDice} />;
}
