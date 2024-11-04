import { useState } from "react";
import dice_empty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export const Dice = () => {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
  const random = Math.floor(Math.random() * 6);
  const [currDice, setCurrDice] = useState(dices[random]);

  const setRandomDice = () => {
    const random = Math.floor(Math.random() * 6);
    setCurrDice(dices[random]);
  };

  const handleClick = (currDice) => {
    setCurrDice(dice_empty);
    setTimeout(setRandomDice, 1000);
  };

  return <img src={currDice} onClick={handleClick} />;
};
