import { useState } from "react";
import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

function Dice() {
  const diceImagesArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const getRandomDie = () => {
    return diceImagesArray[Math.floor(Math.random() * diceImagesArray.length)];
  };

  const [currentDie, setCurrentDie] = useState(getRandomDie());

  const handleClick = () => {
    setCurrentDie(DiceEmpty);

    setTimeout(() => {
      setCurrentDie(getRandomDie());
    }, 1000);
  };

  return (
    <button onClick={handleClick}>
      <img
        src={currentDie}
        alt="randomly rolled die"
        width="100"
        height="100"
      />
    </button>
  );
}

export default Dice;
