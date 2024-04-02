import { useState } from "react";
import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const Dice = () => {
  const [image, setImage] = useState(dice0);

  const throwDice = () => {
    // Immediately show the empty dice
    setImage(dice0);
    // After 1 second, update the image to a new random dice face
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number (1-6)
      const newImage = [dice1, dice2, dice3, dice4, dice5, dice6][
        randomNumber - 1
      ];
      setImage(newImage); // Update the image based on the random number
    }, 1000);
  };

  return (
    <img
      style={{ height: `200px` }}
      src={image}
      onClick={throwDice}
      alt="Dice"
    />
  );
};

export default Dice;
