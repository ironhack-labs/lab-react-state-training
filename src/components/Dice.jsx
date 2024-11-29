import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png";

const Dice = () => {
  const [dice, setDice] = useState(1);
  const [isRolled, setIsRolled] = useState(false);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const handleClick = () => {
    setIsRolled(false);
    setTimeout(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
      setIsRolled(true);
    }, 1000);
  };
  return (
    <img
      className="dice"
      src={isRolled ? diceImages[dice] : diceEmpty}
      onClick={handleClick}
    ></img>
  );
};

export default Dice;
