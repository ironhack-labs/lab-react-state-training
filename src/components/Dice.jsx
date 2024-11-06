import {useState} from "react"
import blankDice from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {
    const [dice, setDice] = useState(blankDice);

    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
    
    function randomDiceSelector() {
        setDice(blankDice);
        let randomDice = Math.floor(Math.random() * diceArray.length)
        setTimeout(() => {setDice(diceArray[randomDice])}, 1000);
        return 

    }

    return (
        <>
        <img src={dice} alt="" onClick={()=> randomDiceSelector()}/>
        </>
    )
}

export default Dice;