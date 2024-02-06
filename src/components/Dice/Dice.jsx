// ! modules
import { useState } from "react";

// ? style
import "./Dice.css";

//
import diceEmpty from "./../../assets/images/dice-empty.png";
import diceOne from "./../../assets/images/dice1.png";
import diceTwo from "./../../assets/images/dice2.png";
import diceThree from "./../../assets/images/dice3.png";
import diceFour from "./../../assets/images/dice4.png";
import diceFive from "./../../assets/images/dice5.png";
import diceSix from "./../../assets/images/dice6.png";

export default function Dice() {
  const [currentImage, setCurrentImage] = useState(diceEmpty);

  const allImages = [
    diceEmpty,
    diceOne,
    diceTwo,
    diceThree,
    diceFour,
    diceFive,
    diceSix,
  ];

  function onClick() {
    const _currentNumber = Math.floor(Math.random() * 5) + 1;
    setCurrentImage(diceEmpty);
    setTimeout(() => {
      setCurrentImage(allImages[_currentNumber]);
    }, 1_000);
  }

  return (
    <button onClick={onClick} className="dice">
      <img className="dice__image" src={currentImage} alt="dice" />
    </button>
  );
}
