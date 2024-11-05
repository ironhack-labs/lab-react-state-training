import "./Dice.css"
import { useState } from "react";

import { diceArray } from "../../data/diceArray";
import diceEmpty from "../../assets/images/dice-empty.png"


const Dice = () => {

    const [diceObtained, setDice] = useState(diceEmpty)
    const handleDiceClick = () => {
        setDice(diceEmpty)

        setTimeout(() => {
            setDice(diceArray[Math.floor(Math.random() * diceArray.length)])
        }, 1000)
    }

    return (
        <div className="Dice">
            <h1>DICE</h1>
            <img onClick={handleDiceClick} src={diceObtained} alt="random dice face" />
        </div>
    )
}

export default Dice