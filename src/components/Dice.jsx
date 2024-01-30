import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export default function Dice() {
  const diceArray = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
  const [diceVisible, setDiceVisible] = useState(diceEmpty);

  const toggledice = () => {
    setDiceVisible(diceArray[0]);
    const randomIndex = Math.floor(Math.random() * (diceArray.length - 1)) + 1;

    setTimeout(() => {
      setDiceVisible(diceArray[randomIndex]);
    }, 1000); // 1000 milliseconds (1 second) delay
  };

  return (
    <div className="picture">
      <img src={diceVisible} alt="clickable-dice" onClick={toggledice} />
    </div>
  );
}
