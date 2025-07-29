import { useState } from "react";
import dice3 from "../assets/images/dice3.png";
import emptyDice from "../assets/images/dice-empty.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [diceImg, setDiceImg] = useState(dice3);
  const toggleDiceImg = () => {
    setDiceImg(emptyDice);
    setTimeout(() => {
      setDiceImg(dice6);
    }, 1000);
  };

  return (
    <>
      <div>
        <img src={diceImg} onClick={() => toggleDiceImg()} />
      </div>
    </>
  );
}

export default Dice;
