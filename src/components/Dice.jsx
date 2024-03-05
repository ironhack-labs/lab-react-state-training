import { useState } from "react";

export const Dice = () => {
  const rndDiceNum = () => Math.floor(Math.random() * 6) + 1;
  const [diceNum, setDiceNum] = useState(rndDiceNum);

  const clickedDice = () => {
    setDiceNum("-empty");
    setTimeout(() => {
      setDiceNum(rndDiceNum);
    }, 500);
  };

  return (
    <div>
      <img
        id="dice-img"
        src={"../src/assets/images/dice" + diceNum + ".png"}
        alt="picture of dice"
        onClick={() => clickedDice()}
      />
    </div>
  );
};
