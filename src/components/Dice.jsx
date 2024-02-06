import { useState } from "react";

import diceEmpty from "../assets/images/dice-empty.png";
import diceOne from "../assets/images/dice-one.png";
import diceTwo from "../assets/images/dice-two.png";
import diceThree from "../assets/images/dice-three.png";
import diceFour from "../assets/images/dice-four.png";
import diceFive from "../assets/images/dice-five.png";
import diceSix from "../assets/images/dice-six.png";

function Dice() {
    const dices = [diceEmpty, diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    const [dice, setDice] = useState(dices[0]);
    let firstDice;
   
    function rollDice(){
        let randomNumber = Math.floor(Math.random() * dices.length);
        firstDice = diceEmpty;

    setTimeout(() => {
        setDice(dices[randomNumber])
    }, 1000)
}
    return (
        <div>
            <img src={dice} onClick={rollDice}/>
        </div>
    );
   
    
}

export default Dice;