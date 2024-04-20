import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [diceImage, setDiceImage] = useState(dice3);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const rollDice = () => {
    setDiceImage(diceEmpty);

    setTimeout(() => {
      const randomDiceImage =
        diceImages[Math.floor(Math.random() * diceImages.length)];
      setDiceImage(randomDiceImage);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: "pointer", width: "100px", height: "100px" }}
    />
  );
}

export default Dice;
