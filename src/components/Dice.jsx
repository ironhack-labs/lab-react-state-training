import { useState } from "react";

const Dice = () => {
  const [DiceImage, setDiceImage] = useState("../assets/images/dice-empty.png");

  const handleClick = () => {
    setDiceImage("./assets/images/dice-empty.png");

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`/assets/images/dice${randomNumber}.png`);
    }, 1000);
  };
  return (
    <div>
      <img src={DiceImage} alt="Dice" onClick={handleClick} />
    </div>
  );
};
export default Dice;
