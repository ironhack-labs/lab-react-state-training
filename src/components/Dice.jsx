import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty]

function Dice() {
  const [diceImage, setDiceImage] = useState(diceImages[Math.floor(Math.random()*7)]);

  const rollDice = () =>{
    setDiceImage(diceEmpty)

    setTimeout(()=> {
      const newDiceImage = diceImages [Math.floor(Math.random()*7)]
      setDiceImage(newDiceImage)
    }, 1000)
  }
  return (
    <div className='dice'>
      <img src={diceImage} alt="dice" onClick={rollDice}/>
    </div>
  )
}

export default Dice