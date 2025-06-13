import { useState } from "react";

function Dice() {
  const [dice, setDice] = useState(3);
  function rollDice() {
    const eyesCount = Math.floor(Math.random() * 6 + 1);
    setDice(eyesCount);
  }
  function handleClick() {
    setDice("-empty");
    setTimeout(rollDice, 1000);
  }
  return (
    <img
      className="dice-img"
      onClick={() => handleClick()}
      src={`src/assets/images/dice${dice}.png`}
    />
  );
}
export default Dice;
