import React, { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import empty from "../assets/images/dice-empty.png";

const arrayDice = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [randomDice, setRandomDice] = useState(dice1);

  const rollDice = () => {
    setImage(empty);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setImage(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img src={image} alt="dice" onClick={rollDice} />
    </div>
  );
}

export default Dice;
