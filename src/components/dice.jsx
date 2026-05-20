import { useState } from "react";
import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [dice, setDice] = useState(dice0);

  function rollDice() {
    const num = Math.floor(Math.random() * 6 + 1);

    switch (num) {
      case 1:
        setDice(dice1);
        break;
      case 2:
        setDice(dice2);
        break;
      case 3:
        setDice(dice3);
        break;
      case 4:
        setDice(dice4);
        break;
      case 5:
        setDice(dice5);
        break;
      case 6:
        setDice(dice6);
        break;
    }
  }

  return (
    <div>
      <img src={dice} alt="dice" style={{ width: 250 }} onClick={rollDice} />
    </div>
  );
}

export default Dice;
