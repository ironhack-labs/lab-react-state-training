import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png'; // Empty dice image
import dice1 from '../assets/images/dice1.png'; // Dice images
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]; // Array of dice images

const Dice = () => {
  const [currentDice, setCurrentDice] = useState(dice3); // Initialize with a default dice image

  const rollDice = () => {
    setCurrentDice(emptyDice); // Show empty dice immediately on click

    setTimeout(() => {
      const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)]; // Pick random dice image
      setCurrentDice(randomDice); // Update state with the new random dice image after 1 second
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      alt="Dice"
      onClick={rollDice} // Click event to trigger dice roll
      style={{ cursor: 'pointer', width: '100px' }} // Optional: adjust size and cursor
    />
  );
};

export default Dice;
