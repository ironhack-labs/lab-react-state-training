import React, { useState } from "react";

const Dice = () => {
  const [diceValue, setDiceValue] = useState(
    "./src/assets/images/dice-empty.png"
  );

  const handleClick = () => {
    setDiceValue("./src/assets/images/dice-empty.png");

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(`./src/assets/images/dice${randomValue}.png`);
    }, 1000);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <img
        src={diceValue}
        alt="Dice"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Dice;
