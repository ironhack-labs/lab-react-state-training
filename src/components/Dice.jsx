import { useState } from "react";

import empty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [currentImage, setCurrentImage] = useState(dice1);
  const rollDice = () => {
    setCurrentImage(empty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setCurrentImage(diceImages[randomIndex]);
    }, 1000);
  };

  return <img onClick={rollDice} src={currentImage} alt="dice" />;
}

export default Dice;
