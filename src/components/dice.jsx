
import { useState } from "react";

import diceEmpty from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';

function randomDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
        case 1:
            return diceOne;
        case 2:
            return diceTwo;
        case 3:
            return diceThree;
        case 4:
            return diceFour;
        case 5:
            return diceFive;
        case 6:
            return diceSix;
    }
}

function Dice() {
    const [dice, setDice] = useState(diceEmpty);
    return (
        <img 
            style={{width: '150px'}} 
            src={dice} 
            onClick={() =>{
                setDice(diceEmpty);
                setTimeout(() => setDice(randomDice()), 1000)
            }} 
        />
    );
}

export default Dice;