import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import emptyDice from "../assets/images/dice-empty.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

export default function Dice() {

    const getRandomDice = () =>{
        return diceImages[Math.floor(Math.random() * 6)]
    }

    const [currentDice, setCurrentDice] = useState(getRandomDice);

    const rollDice = () => {
        setCurrentDice(emptyDice);
    }

    setTimeout(() => {
        setCurrentDice(getRandomDice());
    },1000);

    return (
        <div className = "dice-container">
            <img
            src = {currentDice}
            alt = "dice"
            onClick = {rollDice}
            style={{ width: '70px', cursor: 'pointer', display: 'flex', }}
            />
        </div> 
    )
    
}