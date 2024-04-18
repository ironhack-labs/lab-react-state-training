import "./Dice.css";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice1.png";
import dice3 from "../assets/images/dice2.png";
import dice4 from "../assets/images/dice3.png";
import dice5 from "../assets/images/dice4.png";
import dice6 from "../assets/images/dice5.png";
import dice7 from "../assets/images/dice6.png";
import { useState } from "react";

const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [dice, setDice] = useState(() => {
    return sessionStorage.getItem("lastDice") || dice3;
  });

  const dicePlay = () => {
    setDice(diceEmpty);

    setTimeout(() => {
      const newDice = diceArr[Math.floor(Math.random() * diceArr.length)];
      setDice(newDice);
      sessionStorage.setItem("lastDice", newDice);
    }, 1000);
  };
  return (
    <div className="image-container">
      <img src={dice} onClick={dicePlay} alt="clickableImage"></img>
    </div>
  );
}

export default Dice;
