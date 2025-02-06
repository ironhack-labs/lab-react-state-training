import { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const dicePictures = [dice1, dice2, dice3, dice4, dice5, dice6];

export default function Dice() {
const [dice, setDice] = useState(dice3);

const newDice = () => {
    setDice(dice => dice = emptyDice);
      setTimeout(() => {
        setDice(dice => dice = dicePictures[Math.floor(Math.random() * dicePictures.length)]);
    }, 1000);
  };

  return <img onClick={newDice} src={dice} className="dice" />;
}
