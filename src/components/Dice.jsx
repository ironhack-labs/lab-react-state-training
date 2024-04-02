import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [diceValue, setDiceValue] = useState(diceEmpty);
  const [isDiceDisplayed, setIsDiceDisplayed] = useState(false);

  const displayDice = () => {
    if (!isDiceDisplayed) {
      setIsDiceDisplayed(true);
      setDiceValue(diceEmpty);

      setTimeout(() => {
        const diceValues = [dice1, dice2, dice3, dice4, dice5, dice6];
        const randomIndex = Math.floor(Math.random() * diceValues.length);
        setDiceValue(diceValues[randomIndex]);
        setIsDiceDisplayed(false);
      }, 1000);
    }
  };

  return (
    <div>
      <img
        src={diceValue}
        alt="Dice"
        onClick={displayDice}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default Dice;
