import { useState } from 'react';

function Dice() {
  const [dice, setDice] = useState('/src/assets/images/dice3.png');
  const [isRolling, setIsRolling] = useState(false);

  const diceImages = [
    '/src/assets/images/dice1.png',
    '/src/assets/images/dice2.png',
    '/src/assets/images/dice3.png',
    '/src/assets/images/dice4.png',
    '/src/assets/images/dice5.png',
    '/src/assets/images/dice6.png'
  ];

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setDice('/src/assets/images/dice-empty.png');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDice(diceImages[randomIndex]);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <img
      src={dice}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: 'pointer', width: '100px' }}
    />
  );
}

export default Dice;