import dice1 from '../assets/images/dice1.png'
import { useState } from "react";

const Dice = () => {
    const [diceValue, setDiceValue] = useState(0);
    const numberToImage = (num) => {
        
    }
    const rollDice = () => {
      setDiceValue(0);
      setTimeout(
        () => {
        const diceNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        setDiceValue(diceNumber)
        } , 1000
      )  
    }

    return (
        <img onClick= {rollDice} src={dice1} />   
         )
}

export default Dice