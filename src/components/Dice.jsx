import React, { useState } from "react";

import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
export const Dice = () => {
  let [diceImg, setDiceImg] = useState(dice1);

  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];

  const Roll = () => {
    setDiceImg(diceEmpty);

    setTimeout(() => {
      const randomDice = Math.floor(Math.random() * diceArray.length);
      setDiceImg(diceArray[randomDice]);
    }, 1000);
  };
  //   const images = img1 ? Arteta1 : Arteta2;
  return <img src={diceImg} onClick={Roll} />;
};
export default Dice;
