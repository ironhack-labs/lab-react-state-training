import { useState } from "react";

import dice1 from "../../images/dice1.png";
import dice2 from "../../images/dice2.png";
import dice3 from "../../images/dice3.png";
import dice4 from "../../images/dice4.png";
import dice5 from "../../images/dice5.png";
import dice6 from "../../images/dice6.png";
import diceEmpty from "../../images/dice-empty.png";

function Dice() {
  const numberDice = [dice1, dice2, dice3, dice4, dice5, dice6];

  let randomDice = () => Math.floor(Math.random() * 6);

  const [currentDice, setCurrentDice] = useState(numberDice[randomDice()]);

  const rollDice = () => {
    setCurrentDice(diceEmpty);

    setTimeout(() => {
      const newDice = numberDice[randomDice()];
      setCurrentDice(newDice);
    }, 1000); // 1-second delay
  };

  return (
    <img
      className="mt-2"
      src={currentDice}
      alt="dice-number"
      onClick={rollDice}
      style={{ width: "200px" }}
    />
  );
}

export default Dice;
