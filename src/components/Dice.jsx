import React, { useState } from 'react';
// Import images
import diceEmpty from '../photos/dice-empty.png';
import dice1 from '../photos/dice1.png';
import dice2 from '../photos/dice2.png';
import dice3 from '../photos/dice3.png';
import dice4 from '../photos/dice4.png';
import dice5 from '../photos/dice5.png';
import dice6 from '../photos/dice6.png';

function Dice() {
  const [currentDice, setCurrentDice] = useState(dice3); // Initial dice face (can be any)

  const rollDice = () => {
    // First, show the empty dice
    setCurrentDice(diceEmpty);
    
    // After 1 second, show a random dice face
    setTimeout(() => {
      const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
      const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
      setCurrentDice(randomDice);
    }, 1000);
  };

  return (
    <img src={currentDice} alt="Dice" onClick={rollDice} style={{cursor: 'pointer', width: '100px', height: '100px'}} />
  );
}

export default Dice;
