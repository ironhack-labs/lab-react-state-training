import React from "react";
import { useState } from "react";
import diceEmpty from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";
import "./Dice.css";

const Dice = () => {
  const [image, setImage] = useState(diceEmpty);

  const allDice = [dice1, dice2, dice3, dice4, dice5, dice6];

  function showRandomDice() {
    const randomIndex = allDice[Math.floor(Math.random() * allDice.length)];

    setImage(randomIndex);
  }

  function handleClick() {
    setImage(diceEmpty);
    setTimeout(showRandomDice, 1000);
  }

  return (
    <div>
      <img
        className="image"
        onClick={() => handleClick()}
        src={image}
        alt="dice"
      />
    </div>
  );
};

export default Dice;
