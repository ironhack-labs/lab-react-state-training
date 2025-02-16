import React, { useState } from 'react';

const Dice = () => {
  // State to track the current dice image
  const [diceImage, setDiceImage] = useState('./src/assets/images/dice-empty.png');

  // Array of dice images
  const diceImages = [
    './src/assets/images/dice1.png',
    './src/assets/images/dice2.png',
    './src/assets/images/dice3.png',
    './src/assets/images/dice4.png',
    './src/assets/images/dice5.png',
    './src/assets/images/dice6.png',
  ];

  // Function to handle dice roll
  const rollDice = () => {
    // First, show the empty dice image
    setDiceImage('./src/assets/images/dice-empty.png');

    // After 1 second, display a random dice image
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDiceImage(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      {/* Dice image */}
      <img src={diceImage} alt="Dice" onClick={rollDice} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Dice;
