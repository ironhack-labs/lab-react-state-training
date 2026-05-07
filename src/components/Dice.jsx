import { useState } from "react";
import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

function getRandomDice() {
  const diceArr = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const randomDice = diceArr[Math.floor(Math.random() * diceArr.length)];
  return randomDice;
}

export default function Dice() {
  const [image, setImage] = useState(getRandomDice());
  return (
    <>
      <img
        src={image}
        style={{ height: "200px", width: "200px" }}
        onClick={() => {
          (setImage(DiceEmpty),
            setTimeout(() => setImage(getRandomDice()), 1000));
        }}
      />
    </>
  );
}
