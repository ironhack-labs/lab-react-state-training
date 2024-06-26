import { useState } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import diceOne from "../assets/images/dice1.png"
import diceTwo from "../assets/images/dice2.png"
import diceThree from "../assets/images/dice3.png"
import diceFour from "../assets/images/dice4.png"
import diceFive from "../assets/images/dice5.png"
import diceSix from "../assets/images/dice6.png"

const Dice = () => {

    const [die, setDie] = useState(diceOne);

    const diceArr = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

    const rollDice = () => {

        // set state to empty dice
        setDie(diceEmpty);

        // change state to random die after timeout
        setTimeout(() => {
            setDie(diceArr[Math.floor(Math.random() * diceArr.length)]); 
        }, 1000)
    }

    return (
       <div className="img-div">
        <img src={die} onClick={rollDice} />
       </div> 
    );
}

export default Dice;