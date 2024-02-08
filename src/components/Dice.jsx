import React, { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import oneDice from "../assets/images/dice1.png";
import twoDice from "../assets/images/dice2.png";
import threeDice from "../assets/images/dice3.png";
import fourDice from "../assets/images/dice4.png";
import fiveDice from "../assets/images/dice5.png";
import sixDice from "../assets/images/dice6.png";

const diceImages = [
  emptyDice,
  oneDice,
  twoDice,
  threeDice,
  fourDice,
  fiveDice,
  sixDice,
];

let Dice = () => {
  const [dice, setDice] = useState(emptyDice);

  const changeFace = () => {
    const randomDice = Math.floor(Math.random() * diceImages.length);
    setTimeout(() => {
      setDice(diceImages[randomDice]);
    }, 1000);
  };

  return (
      <div style = {{display:"flex",height: "200px", width: "100px", marginTop:"10px"}}>
        <img onClick={changeFace} src={dice} alt="dice"/>
      </div>
  );
};
export default Dice;