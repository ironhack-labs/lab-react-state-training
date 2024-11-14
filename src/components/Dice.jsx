import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import diceImage1 from "../assets/images/dice1.png";
import diceImage2 from "../assets/images/dice2.png";
import diceImage3 from "../assets/images/dice3.png";
import diceImage4 from "../assets/images/dice4.png";
import diceImage5 from "../assets/images/dice5.png";
import diceImage6 from "../assets/images/dice6.png";

export default function Dice() {
    const [diceState, setDiceState] = useState(diceImage3);
    const [diceDisabled, setDiceDisabled] = useState(false)

    const rollTheDice = () => {
        setDiceDisabled(true)
        setDiceState(diceEmpty)
        const randomNumber = Math.floor(Math.random() * 6);
        const selectedDice = [diceImage1, diceImage2, diceImage3, diceImage4, diceImage5, diceImage6].slice(randomNumber, randomNumber + 1)
        setTimeout(() => {
            setDiceState(selectedDice)
            setDiceDisabled(false)
        }, 1000);
        
        
    };

 

    return (
        <div className="diceWrapper">
            <img
                onClick={
                    diceDisabled ? () => {} : () => {rollTheDice()}
                }
                src={diceState}
                alt=""
            />
        </div>
    );
}
