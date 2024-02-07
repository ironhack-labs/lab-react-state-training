import { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const dices = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice () {
    const [dice, setDice] = useState (() => dices[Math.floor(Math.random()) * dices.length])
    
    function RandomDice () {
        const randomDices = Math.floor(Math.random() * dices.length);
        setTimeout(() =>{
            setDice(dices[randomDices]);
        }, 1000);
    }
    return (
        <div style = {{display: "flex", height: "150px", width: "150px"}}>
            <img src= {dice} onClick={RandomDice}/>
        </div>
    )
}

export default Dice