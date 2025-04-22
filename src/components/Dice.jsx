import React, { useState } from "react";
import empty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [dice, setDice] = useState(dice3);

  function rollDice() {
    setDice(empty);
    setTimeout(() => {
      const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
      const random = Math.floor(Math.random() * dices.length);
      setDice(dices[random]);
    }, 1000);
  }

  return (
    <img
      src={dice}
      alt="dice"
      onClick={rollDice}
      style={{ width: "100px", cursor: "pointer" }}
    />
  );
}

export default Dice;
