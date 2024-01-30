import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png";

const dices = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
];

const Dice = () => {
  const [imgSrc, setImgSrc] = useState(dice1);
  const handleClick = () => {
    setImgSrc(diceEmpty);
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * dices.length);
        setImgSrc(dices[randomNumber]);
      }, "1000");
  };

  return (
    <img
      src={imgSrc}
      alt="Dice"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Dice;
