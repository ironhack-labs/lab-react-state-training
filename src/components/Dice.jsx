import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import diceOne from "../assets/images/dice1.png";
import diceTwo from "../assets/images/dice2.png";
import diceThree from "../assets/images/dice3.png";
import diceFour from "../assets/images/dice4.png";
import diceFive from "../assets/images/dice5.png";
import diceSix from "../assets/images/dice6.png";

function Dice() {
  const [image, setImage] = useState(diceEmpty);

  const diceImages = [
    diceOne,
    diceTwo,
    diceThree,
    diceFour,
    diceFive,
    diceFive,
    diceSix,
  ];

  const toggleImage = () => {
    console.log("click image");
    // Check the current image and switch to the other

    setImage(diceEmpty);
  };

  setTimeout(() => {
    // Only change the image if it's currently diceEmpty to prevent overriding subsequent clicks
    if (image === diceEmpty) {
      const randomDice =
        diceImages[Math.floor(Math.random() * diceImages.length)];
      setImage(randomDice);
    }
  }, 1000);

  return (
    <div className="image">
      <img
        src={image}
        alt=""
        onClick={toggleImage}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default Dice;
