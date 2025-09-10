import { useEffect, useState } from "react";

const dicePictures = [
  '../src/assets/images/dice-empty.png',
  '../src/assets/images/dice1.png', 
  '../src/assets/images/dice2.png', 
  '../src/assets/images/dice3.png', 
  '../src/assets/images/dice4.png', 
  '../src/assets/images/dice5.png', 
  '../src/assets/images/dice6.png'
];

function randomDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}

function Dice() {
  const [currentDiceValue, setDiceValue] = useState(0); 
  const [isRolling, setIsRolling] = useState(false); 

  useEffect(() => {
    let interval;
    if (isRolling) {
      interval = setInterval(() => {
        setDiceValue(randomDiceValue());
      }, 1000); 
    }

    return () => clearInterval(interval); 
  }, [isRolling]);

  const handleDiceClick = () => {
    setIsRolling(true); 
  };

  return (
    <img 
      src={dicePictures[currentDiceValue]} 
      alt="dice image" 
      className="w-25 m-3" 
      onClick={handleDiceClick} 
    />
  );
}

export default Dice;