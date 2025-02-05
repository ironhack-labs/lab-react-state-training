import { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import one from "../assets/images/dice1.png";
import two from "../assets/images/dice2.png";
import three from "../assets/images/dice3.png";
import four from "../assets/images/dice4.png";
import five from "../assets/images/dice5.png";
import six from "../assets/images/dice6.png";

function Dice() {
  const dices = [emptyDice, one, two, three, four, five, six];

  const [image, setImage] = useState(three);

  const roll = () => {
    setImage(emptyDice);

    setTimeout(() => {
      const newRoll = Math.floor(Math.random() * 6) + 1;
      console.log(newRoll);
      setImage(dices[newRoll]);
    }, 1000);
  };

  return (
    <div className="roll">
      <img onClick={roll} src={image} alt="Dice" />
    </div>
  );
}

export default Dice;
