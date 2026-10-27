import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

console.log(dice1);

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
const randomDice = () =>
  diceImages[Math.floor(Math.random() * diceImages.length)];

function Dice() {
  const [diceImage, setDiceImage] = useState(randomDice);

  const handleDiceClick = () => {
    setDiceImage(diceEmpty);

    setTimeout(() => {
      setDiceImage(randomDice());
    }, 1000);
  };

  return <img src={diceImage} alt="Dice" onClick={handleDiceClick} />;
}

export default Dice;
