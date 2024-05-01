import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const [isRolling, setIsRolling] = useState(false);
  const [currentImage, setCurrentImage] = useState(emptyDice);

  const rollDice = () => {
    setIsRolling(true);

    setTimeout(() => {
      setIsRolling(false);
      const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];
      const randomIndex = Math.floor(Math.random() * 6);
      setCurrentImage(diceFaces[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img
        src={isRolling ? emptyDice : currentImage}
        alt="Dice"
        onClick={rollDice}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default Dice;