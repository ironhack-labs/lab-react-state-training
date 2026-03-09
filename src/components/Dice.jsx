import { useState } from "react";

function Dice() {
  const [dice, setDice] = useState("dice3");

  const rollDice = () => {
    setDice("dice-empty");
    setTimeout(() => {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      setDice(`dice${randomDice}`);
    }, 1000);
  };

  return (
    <img
      onClick={rollDice}
      src={`/src/assets/images/${dice}.png`}
      alt="dice"
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default Dice;
