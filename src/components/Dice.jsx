import React, { useState } from 'react';
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]; 
  const [currentImg, setCurrentImg] = useState(diceEmpty);

  const handleImg = () => {
    setCurrentImg(diceEmpty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);  
      setCurrentImg(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div className='dice'>
      <img
        src={currentImg}
        alt="Dice"
        onClick={handleImg}
        style={{ cursor: 'pointer', transition: '0.3s' }} 
      />
    </div>
  );
}

export default Dice;
