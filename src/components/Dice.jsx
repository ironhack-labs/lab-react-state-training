import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import dice0 from "../assets/images/dice-empty.png";

import "./Dice.css";

import { useState } from "react";

export const Dice = () => {
  const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
  const [diceState, setDiceState] = useState(0);

  const changeDice = () => {
    setTimeout(() => {
      setDiceState(Math.floor(Math.random() * 6) + 1);
    }, 1000);
    setDiceState(0);
  };

  return (
    <div className="dice-div" onClick={changeDice}>
      <img src={diceImages[diceState]} alt="Dice" />
    </div>
  );
};
