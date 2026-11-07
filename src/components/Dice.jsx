import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
    const [dice, setDice] = useState(1);
    const imageSrc = dice === 0 ? diceEmpty : diceImages[dice - 1];

    
    const rollDice = () => {
          if (dice === 0) {
    return;
  }

         setDice(0);

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  }, 1000);
};

  return (
    <div>
      <img   className="dice-image"
 src={imageSrc} onClick={rollDice} alt="Dice" />
    </div>
  );
}

export default Dice;
