import React, { useState } from 'react';

const diceImages = [
  '/src/assets/images/dice1.png',
  '/src/assets/images/dice2.png',
  '/src/assets/images/dice3.png',
  '/src/assets/images/dice4.png',
  '/src/assets/images/dice5.png',
  '/src/assets/images/dice6.png',
];

function Dice() {
  const [value, setValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setValue(newValue);
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h2>Dice</h2>
      <img src={diceImages[value - 1]} alt={`Dice ${value}`} style={{ width: 60, height: 60 }} />
      <div>
        <button onClick={rollDice} style={{ marginTop: 12 }}>Roll Dice</button>
      </div>
      <p>Value: {value}</p>
    </div>
  );
}

export default Dice;
