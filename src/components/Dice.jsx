import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //assigning a state to currentImageIndex - setCurrentImageIndex gets hold
  // of the counts

  const images = [
    { src: dice1, alt: "Dice 1" },
    { src: dice2, alt: "Dice 2" },
    { src: dice3, alt: "Dice 3" },
    { src: dice4, alt: "Dice 4" },
    { src: dice5, alt: "Dice 5" },
    { src: dice6, alt: "Dice 6" },
  ];

  const handleClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentImageIndex);
    // do - while loop execute a block of code as long as the condition
    // to meet is true
    // In the specific case while the newIndex assigned value matches the currentImageIndex
    //
    setCurrentImageIndex(newIndex);
  };
  //arrow function to handle click and generate a new index at every
  // click

  return (
    <div>
      <img
        className="dice"
        src={
          currentImageIndex !== null ? images[currentImageIndex].src : diceEmpty
        }
        alt={
          currentImageIndex !== null
            ? images[currentImageIndex].alt
            : "Empty Dice"
        }
        onClick={handleClick}
        style={{ width: "100px", height: "100px" }} // Set width and height
      />
    </div>
  );
}
export default Dice;
