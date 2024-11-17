import React, { useState } from 'react';

function Dice ()  {
  const [diceImage, setDiceImage] = useState('src/assets/images/dice-empty.png');

  const diceImages = [
    'src/assets/images/dice1.png',
    'src/assets/images/dice2.png',
    'src/assets/images/dice3.png',
    'src/assets/images/dice4.png',
    'src/assets/images/dice5.png',
    'src/assets/images/dice6.png'
  ];

  
  function handleClick ()  {
    
    setDiceImage('src/assets/images/dice-empty.png');

   
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDiceImage(diceImages[randomIndex]);
    }, 1000); 
  };

  return (
    <div>
      <img
        src={diceImage}
        alt="Dice"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};


export default Dice;