import { useState } from "react";
import "./Dice.css";
import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [rolling, setRolling] = useState(false);
  const [diceIndex, setDiceIndex] = useState(0);

  const toggleDice = () => {
    if (!rolling) {
      setRolling(true); // starts dicing
      setTimeout(() => {
        setRolling(false); // stopps dicing after 1sec
        const randomIndex = Math.floor(Math.random() * diceArr.length); // random index of dice array
        setDiceIndex(randomIndex);
      }, 1000);
    }
  };

  return (
    <img
      className="dice"
      onClick={toggleDice}
      src={rolling ? dice0 : diceArr[diceIndex]}
      alt={`Dice ${rolling ? "empty" : diceIndex}`}
    />
  );
}

export default Dice;
