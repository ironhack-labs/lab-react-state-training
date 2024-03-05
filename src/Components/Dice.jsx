import React, { useState } from "react";
import dice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const Dice = () => {
  const diceImg = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [currentImg, setCurrentImg] = useState(dice);

  const rollDice = () => {
    setCurrentImg(dice);

    setTimeout(() => {
      const randomDice = Math.floor(Math.random() * diceImg.length);
      setCurrentImg(diceImg[randomDice]);
    }, 1000);
  };

  return (
    <div>
      <img className="dice" src={currentImg} alt="dice" onClick={rollDice} />
    </div>
  );
};

export default Dice;