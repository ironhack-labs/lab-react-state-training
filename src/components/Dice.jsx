import React, { useState } from "react";

function Dice() {
  const [diceImage, setDiceImage] = useState("../assets/images/dice6.png");

  const handleClick = () => {
    setDiceImage("../assets/images/dice-empty.png");

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const imagePath = `/assets/images/dice${randomNumber}.png`;
      setDiceImage(imagePath);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Dice;
