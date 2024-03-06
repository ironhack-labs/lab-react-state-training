import React from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export const DiceRandom = ({ diceImg, setDiceImg, diceFunc }) => {
  return (
    <div>
     
      {/* <img className="dice" src={diceImg} alt="" /> */}
      <img className="dice" src={diceImg} onClick={diceFunc} alt="" />
    </div>
  );
};
