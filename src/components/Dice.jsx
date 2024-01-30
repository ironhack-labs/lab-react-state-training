import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomDiceValue = () => {
    const diceValues = [1, 2, 3, 4, 5, 6];
    const randomIndex = Math.floor(Math.random() * diceValues.length);
    return diceValues[randomIndex];
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newDiceValue = getRandomDiceValue();
      setDiceValue(newDiceValue);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <img
        src={
          isLoading
            ? diceEmpty
            : diceValue
            ? [dice1, dice2, dice3, dice4, dice5, dice6][diceValue - 1]
            : diceEmpty
        }
        alt="Dice"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Dice;
