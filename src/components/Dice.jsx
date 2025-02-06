import diceZero from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';
import { useState } from 'react';
import '../App.css';

const Dice = () => {

    const diceArray = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    const [dice, setDice] = useState(diceZero);

    const rollDice = () => {
        setDice(diceZero);
        setTimeout(() => {
            setDice(dice === diceZero ? (diceArray[Math.floor(Math.random() * diceArray.length)]): diceZero)
        }, 1000);
    };

  return (
    <div>

        <img src={dice} onClick={rollDice} className='dice'/>   
        
      
    </div>
  )
}

export default Dice
