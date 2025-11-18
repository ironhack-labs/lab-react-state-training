import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

function Dice() {
  const [currentDice, setCurrentDice] = useState(dice1)
  const [isRolling, setIsRolling] = useState(false)

  const rollDice = () => {
    if (isRolling) return
    
    // Show empty dice first
    setIsRolling(true)
    setCurrentDice(diceEmpty)
    
    // After 1 to show random dice
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length)
      setCurrentDice(diceImages[randomIndex])
      setIsRolling(false)
    }, 1000)}

  return (
    <img 
      src={currentDice} 
      alt="dice" 
      onClick={rollDice}
      style={{ width: '100px' }}
    />
  );
}

export default Dice;