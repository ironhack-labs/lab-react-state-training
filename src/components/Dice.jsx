import { useState } from "react";

export const Dice = () => {
  const [dice, setDice] = useState(Math.floor(Math.random() * 6) + 1);

  const rollDice = () => {
    const randomDiceNumber = Math.floor(Math.random() * 6) + 1;
    setDice(0);
    setTimeout(() => {
      setDice(randomDiceNumber);
    }, 1000);
  };

  return (
    <div onClick={rollDice}>
      <img
        className="dice"
        src={`/src/assets/images/dice${dice}.png`}
        alt="Dice"
      />
    </div>
  );
};
