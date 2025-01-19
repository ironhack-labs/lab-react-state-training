import React, { useState } from "react";
import diceEmpty from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";

function Dice({ className = "" }) {
  let [image, setImage] = useState(dice1);
  const diceList = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

  const changeImage = () => {
    setImage(diceEmpty);

    setTimeout(() => {
      setImage(diceList[Math.floor(Math.random() * 6) + 1]);
    }, 100);
  };

  return (
    <div className="">
      <button
        className="clickable-button"
        onClick={() => changeImage()}
        style={{ backgroundImage: `url(${image})` }}
      ></button>
    </div>
  );
}

export default Dice;
