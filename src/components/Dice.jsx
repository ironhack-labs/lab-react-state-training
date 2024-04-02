import { useEffect, useState } from 'react';

const Dice = () => {
  const [diceImage, setDiceImage] = useState('../assets/images/dice-empty.png');

  useEffect(() => {
    const timerId = setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`../assets/images/dice-${randomNumber}.png`);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  const handleClick = () => {};

  return (
    <img
      src={diceImage}
      alt='dice'
      style={{ width: '100px', height: '100px', cursor: 'pointer' }}
      onClick={handleClick}
    />
  );
};

export default Dice;
