import { useState } from "react";
import dice1 from "../../images/dice1.png";
import dice2 from "../../images/dice2.png";
import dice3 from "../../images/dice3.png";
import dice4 from "../../images/dice4.png";
import dice5 from "../../images/dice5.png";
import dice6 from "../../images/dice6.png";
import empty from "../../images/dice-empty.png";

function Dice({ className = '' }) {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [currentImage, setCurrentImage] = useState(() =>
        diceImages[Math.floor(Math.random() * 6)]
    );

    const handleDice = () => {setCurrentImage(empty);
        setTimeout(() => {
            const newImage = diceImages[Math.floor(Math.random() * diceImages.length)];
            setCurrentImage(newImage);
        }, 1000); // Cambia después de 1 segundo
    };

  return (
    <>
      <img
        src={currentImage} 
        alt="dado"
        onClick={handleDice} 
        className={className}        
      />
    </>
  );
}

export default Dice;
