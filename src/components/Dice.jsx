import { useState } from 'react';
import DiceImg from '../assets/images/dice-empty.png';
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import './Dice.css';


const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

export default function Dice() {
    

    const [currImg, setCurrImg] = useState(DiceImg);
    const [currInterval, setCurrInterval] = useState(null);

    const rollDice = () => {
      if (currInterval) {
        clearInterval(currInterval);
      }

     setCurrImg(DiceImg); 
      setTimeout(() => {
        clearTimeout();
        setCurrInterval(null);
        setCurrImg(diceImages[Math.floor(Math.random() * 6)]);
      }, 1000); 

    };

    return (
        <div className='dice'>
            <img src={currImg} alt="Dice" onClick={rollDice}/>
        </div>
    )
}
