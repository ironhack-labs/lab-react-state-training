import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const getRandomDiceValue = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const Dice = () => {
  const [diceValue, setDiceValue] = useState(getRandomDiceValue());

  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    setIsRolling(true);
    setTimeout(() => {
      setDiceValue(getRandomDiceValue());
      setIsRolling(false);
    }, 1000);
  };

  const diceImages = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

  const diceImage = isRolling ? diceEmpty : diceImages[diceValue];

  return (
    <img
      src={diceImage}
      alt={`Dice ${diceValue}`}
      onClick={handleClick}
      style={{ width: "100px", height: "100px", cursor: "pointer" }}
    />
  );
};

export default Dice;
