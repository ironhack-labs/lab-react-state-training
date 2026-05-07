import { useState } from "react";

import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceImages = [
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
];

export default function Dice() {
  const [image, setImage] = useState(diceEmpty);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;

    setRolling(true);
    setImage(diceEmpty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setImage(diceImages[randomIndex]);
      setRolling(false);
    }, 1000);
  };

  return (
    <img
      src={image}
      alt="dice"
      onClick={rollDice}
      style={{ cursor: "pointer", width: "120px", display: "block", margin: "20px auto" }}
    />
  );
}