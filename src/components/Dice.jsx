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

  const changeImg = () => {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    setTimeout(() => {
      setDice(diceImages[randomIndex]);
    }, 2 * 1000);
  };
  return (
    <>
      <div
        style={{
          marginTop: "10px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img onClick={changeImg} src={dice} alt="dice" />
      </div>
    </>
  );
};
export default Dice;
