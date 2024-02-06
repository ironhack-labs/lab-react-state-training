import { useState } from "react";
import "./Dice.css"
import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

export default function Dice() {
    const [imageValue, imageValueSet] = useState(DiceEmpty);
    
    function rollDice() {
        let randomNumber = Math.ceil(Math.random()*6)
        if (randomNumber === 1) {
            imageValueSet(Dice1);
        } else if (randomNumber === 2) {
            imageValueSet(Dice2);
        } else if (randomNumber === 3) {
            imageValueSet(Dice3);
        } else if (randomNumber === 4) {
            imageValueSet(Dice4);
        } else if (randomNumber === 5) {
            imageValueSet(Dice5);
        } else if (randomNumber === 6) {
            imageValueSet(Dice6);
        }
    }

    return(
        <div className="Dice">
            <p>Iteration 4</p>
            <img src={imageValue} alt="Dice" onClick={() => {
                imageValueSet(DiceEmpty);
                setTimeout(() => rollDice(), 300)
            }}/>
        </div>
    )
}