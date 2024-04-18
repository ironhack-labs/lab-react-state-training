import React, { useState } from "react";
import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

const images = [DiceEmpty, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

function Dice() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const handleClick = () => {
    setCurrentImageIndex(0); // Display empty dice image
    setTimeout(() => {
      const newIndex = Math.floor(Math.random() * 6) + 1; // Generate random index for dice image
      setCurrentImageIndex(newIndex);
    }, 1000);
  };

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt="Dice"
        style={{ width: "100px", height: "100px" }}
        onClick={handleClick}
      />
    </div>
  );
}

export default Dice;
