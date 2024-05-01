import { useState } from "react";
import DiceZero from "../assets/images/dice-empty.png"
import Dice1 from "../assets/images/dice1.png"
import Dice2 from "../assets/images/dice2.png"
import Dice3 from "../assets/images/dice3.png"
import Dice4 from "../assets/images/dice4.png"
import Dice5 from "../assets/images/dice5.png"
import Dice6 from "../assets/images/dice6.png"


const diceNumber = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

function RollDice() {
    const [dice, setDice] = useState(DiceZero);

    function randomDice() {

        setDice(DiceZero);
    
        setTimeout(() => {
        
            const randomIndex = Math.floor(Math.random() * diceNumber.length);
            setDice(diceNumber[randomIndex]);
        }, 1000);
    }

    return (
        <>
            <div>
                <h2>Rolling a dice</h2>
                <img onClick={randomDice} src={dice} alt="" />
            </div>
        </>

    );
}

export default RollDice

