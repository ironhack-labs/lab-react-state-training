import { useState } from "react";

import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice1.png";


export function Dice() {

  const emptyDice = dice0;
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const randomIndex = Math.floor(Math.random() * diceImages.length);

  const [diceImage, setDiceImage] = useState(diceImages[randomIndex]);

  const handleClick = () => {
      setDiceImage(emptyDice);
      setTimeout(() => {
        const newIndex = Math.floor(Math.random() * diceImages.length);
        setDiceImage(diceImages[newIndex]);
      }, 1000);
    };

  return (
    <img 
      src={diceImage} 
      alt="Dice" 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }} 
      className="dice"
    />
  );
}
