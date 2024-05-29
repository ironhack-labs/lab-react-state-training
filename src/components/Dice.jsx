import React, { useState } from "react";
import emptyDice from "src/assets/images/dice-empty.png";
import dice1 from "src/assets/images/dice1.png";
import dice2 from "src/assets/images/dice2.png";
import dice3 from "src/assets/images/dice3.png";
import dice4 from "src/assets/images/dice4.png";
import dice5 from "src/assets/images/dice5.png";
import dice6 from "src/assets/images/dice6.png";

const diceValues = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [roll, setRoll] = useState(diceValues[0]);

  const handleRoll = () => {
    setRoll(0);
    setTimeout(() => {
      setRoll(Math.floor(Math.random() * (diceValues.length - 1) + 1))
    })
  }

  return <img src={diceValues[roll]} style={(width: "100px", margin: "1rem")} onClick={handleRoll} />;
}

export default Dice;
