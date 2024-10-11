import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import { useState } from 'react'

const dicesArray = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
  
const Dice = () => {
 
    const [dice, setDice] = useState(dicesArray[Math.floor(Math.random() * dicesArray.length)])
    console.log('dice: ', dice);

    const rollTheDice = () => {
        setDice(dicesArray[0]);
         setTimeout(()=>{
           setDice(dicesArray[Math.floor(Math.random() * dicesArray.length)])
        },1000)
    }

    return (
        <img onClick={rollTheDice} id="dice1" src={`${dice}`}/>
    );
}

export default Dice;