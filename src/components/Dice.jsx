import { useState } from "react";

import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [currentDice, setCurrentDice] = useState(dice1);

  const rollDice = () => {
    setCurrentDice(diceEmpty);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6);

      setCurrentDice(dices[randomNumber]);
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      alt="dice"
      onClick={rollDice}
    />
  );
}

export default Dice;