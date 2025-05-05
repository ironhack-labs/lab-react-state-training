import React, { useState } from "react";

const diceImages = [
  "../public/assets/images/dice1.png",
  "../public/assets/images/dice2.png",
  "../public/assets/images/dice3.png",
  "../public/assets/images/dice4.png",
  "../public/assets/images/dice5.png",
  "../public/assets/images/dice6.png",
];
const RandomDiceImage = () => {
  const randomIndex = Math.floor(Math.random() * diceImages.length);
  return diceImages[randomIndex];
};

export default function Dice() {
  const [diceImage, setDiceImage] = useState(RandomDiceImage());
  const handleClick = () => {
    setTimeout(() => {
      setDiceImage(RandomDiceImage());
    }, 1000);
  };

  return (
    <div>
      <img onClick={handleClick} src={diceImage} alt="dice" className="dice" />
    </div>
  );
}
