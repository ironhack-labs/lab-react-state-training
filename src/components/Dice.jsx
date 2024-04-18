import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import emptyDice from "../assets/images/dice-empty.png";

function Dice() {
  const images = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomIndex = Math.floor(Math.random() * images.length);
  const [currentImg, setCurrentImg] = useState(emptyDice);
  const clickOnDice = () => {
    setCurrentImg(emptyDice);
    setTimeout(() => {
      setCurrentImg(images[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img src={currentImg} onClick={clickOnDice} style={{ width: "200px" }} />
    </div>
  );
}

export default Dice;
