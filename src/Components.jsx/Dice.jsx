import { useState } from "react";

function Dice() {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    setIsRolling(true); // show empty dice

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
      setIsRolling(false);
    }, 1000);
  };

  const diceImage = isRolling
    ? "/src/assets/images/dice-empty.png"
    : `/src/assets/images/dice${diceValue}.png`;

  return (
    <img
      src={diceImage}
      alt="dice"
      onClick={handleClick}
      style={{ width: "200px", cursor: "pointer" }}
    />
  );
}

export default Dice;
