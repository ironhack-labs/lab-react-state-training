import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const getRandomDice = () => diceImages[Math.floor(Math.random() * 6)];
  const [currentDice, setCurrentDice] = useState(getRandomDice());

  const handleClick = () => {
   
    setCurrentDice(diceEmpty);

    
    setTimeout(() => {
      setCurrentDice(getRandomDice());
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      onClick={handleClick}
      style={{ width: "150px", cursor: "pointer" }}
    />
  );
}

export default Dice;