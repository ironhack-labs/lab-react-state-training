import { useState } from "react";

import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const dicesImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const randomIndex = Math.floor(Math.random() * dicesImages.length);

  const [dice, setDice] = useState(dicesImages[randomIndex]);

  const toggleDice = () => {
    setDice(diceEmpty);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dicesImages.length);
      const currentDice = dicesImages[randomIndex];
      setDice(currentDice);
    }, 1000);
  };

  return (
    <div className="dice">
      <img src={dice} alt="Random Dice" onClick={toggleDice} />
    </div>
  );
}

export default Dice;
