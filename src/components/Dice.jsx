import React, { useState } from "react";
import EmptyDiceImage from "../assets/images/dice-empty.png";
import dice1Image from "../assets/images/dice1.png";
import dice2Image from "../assets/images/dice2.png";
import dice4Image from "../assets/images/dice4.png";
import dice6Image from "../assets/images/dice6.png";

function Dice() {
  const [diceImage, setDiceImage] = useState(dice1Image);

  return (
    <div>
      <img
        src={diceImage}
        alt=""
        onClick={() => {
          setDiceImage(EmptyDiceImage);

          setTimeout(() => {
            const diceImages = [dice1Image, dice2Image, dice4Image, dice6Image];
            const randomIndex = Math.floor(Math.random() * diceImages.length);
            setDiceImage(diceImages[randomIndex]);
          }, 1000);
        }}
      />
    </div>
  );
}

export default Dice;
