import React, { useState, useEffect } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState('');
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setDiceValue('../assets/images/dice-empty.png');

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(`../assets/images/dice${randomValue}.png`);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <img
      src={isRolling ? '../assets/images/dice-empty.png' : diceValue}
      alt="Dice"
      onClick={() => rollDice()}
    />
  );
};

export default Dice;