import { useState } from "react";
import emptyDice from "../images/dice-empty.png";
import Dice1 from "../images/dice1.png";
import Dice2 from "../images/dice2.png";
import Dice3 from "../images/dice3.png";
import Dice4 from "../images/dice4.png";
import Dice5 from "../images/dice5.png";
import Dice6 from "../images/dice6.png";

function Dice() {
  const images = [emptyDice, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [currentImage, setCurrentImage] = useState(emptyDice);

  const handleToggle = () => {
    setCurrentImage(emptyDice);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="dice"
        onClick={handleToggle}
        style={{ cursor: "pointer", width: "100px", height: "100px" }}
      />
    </div>
  );
}

export default Dice;
