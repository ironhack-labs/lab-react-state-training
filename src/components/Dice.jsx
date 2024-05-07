import { useState } from "react";
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png'

export default function Dice() {
  const [randDice, setRandDice] = useState(false);
  const [showEmptyDice, setShowEmptyDice] = useState(false);

  const diceArray = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
  ];

  function didClick() {
    setShowEmptyDice(true);
    setTimeout(() => {
      setShowEmptyDice(false);
      setRandDice(!randDice);
    }, 1000);

  }

  function getRandDice() {
    return diceArray[Math.floor(Math.random() * diceArray.length)];
  }
  return (
    <img className="dice" onClick={didClick} src={showEmptyDice ? emptyDice : (randDice ? getRandDice() : dice3)}></img>
  )
}