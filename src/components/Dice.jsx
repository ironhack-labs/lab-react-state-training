import { useState } from "react";
import blankImage from "../assets/images/dice-empty.png";
import { randomImage } from "../utils/randImage.js";

const Dice = () => {
  const [dice, setDice] = useState(randomImage());

  function rollDice() {
    setDice(blankImage);
    setTimeout(() => {
      setDice(randomImage());
    }, 1000);
  }

  return (
    <div className="diceImage">
      <img src={dice} alt="blank Image" onClick={rollDice}/>
    </div>
  );
};
export default Dice;
