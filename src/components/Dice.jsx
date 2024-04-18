import "../../src/App.css";
import { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [showEmpty, setShowEmpty] = useState(false);
  const handleClick = () => setShowEmpty(!showEmpty);
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomDice = diceArray[Math.floor(Math.random() * diceArray.length)];

  return (
    <div onClick={handleClick}>
      {showEmpty ? (
        <img src={emptyDice} alt="img-empty" />
      ) : (
        <img src={randomDice} alt="img-dice" />
      )}
    </div>
  );
}

export default Dice;
