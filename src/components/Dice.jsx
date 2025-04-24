import React, { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyDice from '../assets/images/dice-empty.png';

const Dice = () => {
const diceSide= [dice1, dice2, dice3, dice4, dice5, dice6];

  const [diceImage, setDiceImage] = useState(diceSide[0]);

  const rollDice = () => {
    setDiceImage(emptyDice);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceSide.length);
      setDiceImage(diceSide[randomIndex]);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      style={{ width: '100px', height: '100px', cursor: 'pointer' }}
      onClick={rollDice}
    />
  );
};

export default Dice;