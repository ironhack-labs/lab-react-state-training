import React, { useState } from 'react';

const Dice = ({ diceImages }) => {
  const [currentImage, setCurrentImage] = useState(diceImages[0]);

  const rollDice = () => {
    setCurrentImage(diceImages[diceImages.length - 1]);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * (diceImages.length - 1));
      setCurrentImage(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="dice"
        onClick={rollDice}
        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
      />
    </div>
  );
};
