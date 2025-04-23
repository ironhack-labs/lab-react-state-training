

import React, { useState } from "react";

const Dice = () => {
  const [diceImage, setDiceImage] = useState("lab-react-state-training/src/assets/images/dice-empty.png");

  const handleClick = () => {
    setDiceImage("../assets/images/dice-empty.png");
    
    setTimeout(() => {
      setDiceImage(`../assets/images/dice${Math.floor(Math.random() * 6) + 1}.png`);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "100px", height: "100px" }}
    />
  );
};

export default Dice;
