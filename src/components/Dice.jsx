import  { useState } from 'react';
import emptyPic from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png'; 


export default function Dice(){

const [dice, setDice] = useState('')  

function rollDice(){
  const random = Math.floor(Math.random() * 6) + 1
  setDice(dice[random])
}

function displayImage(dice){
  setDice(emptyPic)
setInterval(()=>{
  rollDice()
}, 1000)
}

return (
  <div>
    <img src={dice} alt="dice" onClick={displayImage} />
  </div>
)

}