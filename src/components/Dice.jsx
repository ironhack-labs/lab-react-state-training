import diceEmpty from './../assets/images/dice-Empty.png'
import dice1 from './../assets/images/dice1.png'
import dice2 from './../assets/images/dice2.png'
import dice3 from './../assets/images/dice3.png'
import dice4 from './../assets/images/dice4.png'
import dice5 from './../assets/images/dice5.png'
import dice6 from './../assets/images/dice6.png'
import { Component, useState } from "react";

function Dice(){
   
    const diceArr = [<img src={dice1} alt="dice image"/>, 
    <img src={dice2} alt="dice image"/>, 
    <img src={dice3} alt="dice image"/>, 
    <img src={dice4} alt="dice image"/>, 
    <img src={dice5} alt="dice image"/>, 
    <img src={dice6} alt="dice image"/>];

    const [show, setShow] = useState(true);
    const [disp, setDisp] = useState(diceArr[randomNumber()]); 

    function randomNumber(){
        //return random number between 1 and 6
        return Math.floor(Math.random() * diceArr.length);;
    }

    function rollDice(){
        return diceArr[randomNumber()];
    }

    function rollAgain(){
        setShow(false);
        setDisp(diceArr[randomNumber()]);
        let interval = setInterval(()=>{
            setShow(true);
        }, 1000);
    }

    return(
        <div className='roll-dice' onClick={rollAgain}>
            {show&&disp}
            {!show&&<img src={diceEmpty} alt="dice image"/>}
        </div>
    )
}
export default Dice