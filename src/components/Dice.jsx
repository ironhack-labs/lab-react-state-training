import { useState } from "react";

import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
 
function Dice() {
  const [diceCount, setDice] = useState(0)

  const handleDice = () => {
    setDice(0)
    
    setTimeout(() => {
      setDice(Math.floor(Math.random() * (diceImages.length - 1)) + 1)
    }, 1000);
  }

  const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <img
      src={diceImages[diceCount]}
      alt={diceCount}
      onClick={handleDice}
    />
  )
}
 
export default Dice;