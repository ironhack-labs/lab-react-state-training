import { useState } from 'react'
import dice1Png from "../assets/images/dice1.png";
import dice2Png from "../assets/images/dice2.png";
import dice3Png from "../assets/images/dice3.png";
import dice4Png from "../assets/images/dice4.png";
import dice5Png from "../assets/images/dice5.png";
import dice6Png from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png"

function Dice () {
    const [diceNumber, setDiceNumber] = useState(0);
    const rollDice = () => {
        setDiceNumber(0);
        setTimeout(() =>setDiceNumber(Math.round(Math.random()*5)+1),1000);
    }
    const updateDicePic=(diceNumber)=> {
        switch (diceNumber) {
            case 0:
            return diceEmpty;
            case 1:
            return dice1Png;
            case 2:
            return dice2Png;
            case 3:
            return dice3Png;
            case 4:
            return dice4Png;
            case 5:
            return dice5Png;
            case 6:
            return dice6Png;
            default:
            return diceEmpty;
        }
    }
    return (
        <>
            <img src={updateDicePic(diceNumber)} onClick={() => rollDice()} alt="dice picture"/>
        </>
    )
} 

export default Dice;