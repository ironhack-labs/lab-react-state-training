import React, { useState } from "react";
import diceempty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [dice, setDice] = useState(diceFaces[0]);
  function handleTheClick() {
    setDice(diceempty);
    setTimeout(() => {
      const randomize = Math.floor(Math.random() * diceFaces.length);
      setDice(diceFaces[randomize]);
    }, 1000);
  }
  return (
    <div>
      <img src={dice} onClick={handleTheClick} />
    </div>
  );
}
export default Dice;
