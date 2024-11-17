import { useState } from "react";
import diceEmpty from "./../../assets/images/dice-empty.png";
import dice1 from "./../../assets/images/dice1.png";
import dice2 from "./../../assets/images/dice2.png";
import dice3 from "./../../assets/images/dice3.png";
import dice4 from "./../../assets/images/dice4.png";
import dice5 from "./../../assets/images/dice5.png";
import dice6 from "./../../assets/images/dice6.png";


function Dice({ className = "" }) {
  const [currentDice, setRollDice] = useState(dice3);

  const diceFaces = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

  const handleRollDice = () => {
    setRollDice(diceEmpty);

    setTimeout(() => {
      const randomDice = Math.floor(Math.random() * diceFaces.length);
      setRollDice(diceFaces[randomDice]);
    }, 1000);
  };

  const imgStyle = {
    cursor: "pointer",
    width: 200,
  };

  return (
    <img
      className={className}
      onClick={handleRollDice}
      src={currentDice}
      style={imgStyle}
    ></img>
  );
}

export default Dice;
