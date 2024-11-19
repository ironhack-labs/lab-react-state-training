import React, { useState } from 'react';
import diceEmpty from '../../images/dice-empty.png';
import dice1 from '../../images/dice1.png';
import dice2 from '../../images/dice2.png';
import dice3 from '../../images/dice3.png';
import dice4 from '../../images/dice4.png';
import dice5 from '../../images/dice5.png';
import dice6 from '../../images/dice6.png';

const Dice = () => {
  const diceImages = [
    diceEmpty,
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
  ];

  const [dice, setDice] = useState(diceImages[0]);

  const handleClick = () => {
    setDice(diceImages[0]);

    setTimeout(() => {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      setDice(diceImages[randomDice]);
    }, 1000);
  };

  return (
    <img 
      src={dice} 
      alt="dice" 
      onClick={handleClick} 
      style={{ cursor: 'pointer', width: '100px' }} 
    />
  );
};

export default Dice;
