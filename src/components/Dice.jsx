// // ## Iteration 4 | State: `Dice`

// // Create a `Dice` component that displays a picture with
// the random dice value (example: `'../assets/images/dice3.png'`).

// // Every time the user clicks on the component, it should:

// // - First, display an empty picture
// (`'../assets/images/dice-empty.png'`)
// // - 1 second later, display a new random picture
// (example: `'../assets/images/dice6.png'`).

import React, { useState, useEffect } from "react";
import "../css/Dice.css";
// import dice from "../assets/images/d";

const Dice = () => {
  const [diceImage, setDiceImage] = useState(
    `src/assets/images/dice${Math.floor(Math.random() * 6) + 1}.png`
  );
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = () => {
    setIsRolling(true);
    setDiceImage("");
    setTimeout(() => {
      setDiceImage(
        `src/assets/images/dice${Math.floor(Math.random() * 6) + 1}.png`
      );
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div className="dice">
      <img
        src={diceImage}
        alt="Dice"
        onClick={handleRoll}
        style={{ cursor: isRolling ? "wait" : "pointer" }}
      />
    </div>
  );
};

export default Dice;
