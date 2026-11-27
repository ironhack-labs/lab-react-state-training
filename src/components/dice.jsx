import {useState} from 'react';
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import './dice.css'

let randomNumber = ()=> Math.floor(Math.random()*6) + 1;

const diceArr = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]

function Dice(){

const [dice,setDice] = useState(diceArr[randomNumber()]);

const updateDice = ()=>{ setDice(diceArr[0]);
    
    setTimeout(()=>{
        setDice(diceArr[randomNumber()])

    }, 1000);}

    return (
        <img className = 'dice-img' onClick = {updateDice} src={dice} alt="" />
    )
}

export default Dice