import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [dicePicture, setDicePicture] = useState(dice1);

  const handleClick = () => {
    setDicePicture(diceEmpty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceFaces.length);
      setDicePicture(diceFaces[randomIndex]);
    }, 1000);
  };

  return (
    <img
      src={dicePicture}
      alt="Dice"
      onClick={handleClick}
      className="dice-img"
    />
  );
}

export default Dice;
