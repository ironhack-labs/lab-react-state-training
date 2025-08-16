import diceEmpty from "../assets/images/dice-empty.png"
import diceOne from "../assets/images/dice1.png"
import diceTwo from "../assets/images/dice2.png"
import diceThree from "../assets/images/dice3.png"
import diceFour from "../assets/images/dice4.png"
import diceFive from "../assets/images/dice5.png"
import diceSix from "../assets/images/dice6.png"

import { useState } from "react"

function Dice() {

    const dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    // console.log(randomNum)
    const [diceValue, setDiceValue] = useState(null)
    const handleDiceRoll = () => { 
        let randomNum = Math.floor(Math.random()* dices.length)+1
        console.log(randomNum)
        setDiceValue(diceEmpty) 
        setTimeout(() => {
            setDiceValue(dices[randomNum-1]) 
        }, 1000);
    }

  return (
    <div>
    <img className="dice"
        onClick={handleDiceRoll}
        src={diceValue === null? diceEmpty:diceValue} 
        alt="Dice value" />
    </div>
  )
}
export default Dice