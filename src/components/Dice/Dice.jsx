import { useState } from "react"
import './Dice.css'
import emptyDice from "./../../assets/Images/dice-empty.png"
import dice1 from "./../../assets/Images/dice1.png"
import dice2 from "./../../assets/Images/dice2.png"
import dice3 from "./../../assets/Images/dice3.png"
import dice4 from "./../../assets/Images/dice4.png"
import dice5 from "./../../assets/Images/dice5.png"
import dice6 from "./../../assets/Images/dice6.png"



const Dice = () => {


    const [currentDice, setCurrentDice] = useState(emptyDice)
    const imageArray = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6]

    const rollDice = () => {
        setCurrentDice(emptyDice)
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * imageArray.length)
            setCurrentDice(imageArray[randomNum])
        }, 1000)
    }


    return (
        <div className="Dice">
            <img
                src={currentDice}
                alt="Dice"
                onClick={rollDice}
            />
        </div>
    )
}

export default Dice