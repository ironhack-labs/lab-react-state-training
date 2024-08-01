import React, { useState } from "react";
import diceEmpty from "../assets/images/dice_empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [diceImage, setDiceImage] = useState(dice3);
  const handleDiceClick = () => {
    setDiceImage(diceEmpty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      const newDiceImage = diceImages[randomIndex];
      console.log("New Dice Image:", newDiceImage);
      setDiceImage(newDiceImage);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      onClick={handleDiceClick}
      style={{ width: "100px", height: "100px", cursor: "pointer" }}
    />
  );
};

export default Dice;
