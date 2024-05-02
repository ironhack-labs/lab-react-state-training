import { useState } from "react";
import empty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [diceTransition, setDiceTransition] = useState(empty);
  const handleRandomDice = () => {
    setDiceTransition(empty)
    setTimeout(() => {
      const random = Math.floor(Math.random() * diceArr.length);
      setDiceTransition(diceArr[random])
    }, 1000);
    

  };
  return (
    <div>
      <img
        src={diceTransition}
        alt={diceTransition}
        width="200px"
        onClick={handleRandomDice}
      />
    </div>
  );
}

export default Dice;
