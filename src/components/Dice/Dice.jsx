import "./Dice.css"
import diceEmpty from "./../../assets/images/dice-empty.png"
import dice1 from "./../../assets/images/dice1.png"
import dice2 from "./../../assets/images/dice2.png"
import dice3 from "./../../assets/images/dice3.png"
import dice4 from "./../../assets/images/dice4.png"
import dice5 from "./../../assets/images/dice5.png"
import dice6 from "./../../assets/images/dice6.png"
import { useState } from "react"


const Dice = () => {

    const diceValues = [dice1, dice2, dice3, dice4, dice5, dice6]

    let [diceObtained, setDiceObtained] = useState(diceEmpty)

    const handleDice = () => {
        setDiceObtained(diceObtained = diceEmpty)
        setTimeout(() => {
            setDiceObtained(diceObtained = diceValues[Math.floor(Math.random() * diceValues.length)])
        }, 1000)
    }



    return (
        <div className="Dice">
            <img onClick={handleDice} src={diceObtained} alt="Dado" />
        </div>
    )

}

export default Dice