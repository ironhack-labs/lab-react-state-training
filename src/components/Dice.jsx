import React, { useState } from "react";
import "../App.css";

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
