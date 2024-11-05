import { useState } from "react";
import diceEmpty from "../../assets/images/dice-empty.png"
import face1 from "../../assets/images/dice1.png"
import face2 from "../../assets/images/dice2.png"
import face3 from "../../assets/images/dice3.png"
import face4 from "../../assets/images/dice4.png"
import face5 from "../../assets/images/dice5.png"
import face6 from "../../assets/images/dice6.png"
const diceArray = [face1, face2, face3, face4, face5, face6]
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
            <img onClick={handleDiceClick} src={diceObtained} alt="random dice face" />
        </div>
    )
}
export default Dice