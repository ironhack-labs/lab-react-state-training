import emptydice from "..//assets/images/dice-empty.png";
import dice1 from "..//assets/images/dice1.png";
import dice2 from "..//assets/images/dice2.png";
import dice3 from "..//assets/images/dice3.png";
import dice4 from "..//assets/images/dice4.png";
import dice5 from "..//assets/images/dice5.png";
import dice6 from "..//assets/images/dice6.png";

import React, { useState } from "react";

export default function Dice() {
  const [dice, setDice] = useState(emptydice);

  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  function showDice() {
    const randomIndex = Math.floor(Math.random() * dices.length);
    const randomDice = dices[randomIndex];

    setTimeout(() => {
      setDice(randomDice);
    }, 1000);

    setDice(emptydice);
  }

  return (
    <div>
      <img src={dice} onClick={showDice} />
    </div>
  );
}
