import { useState } from "react";
import diceOne from "./../../assets/images/dice1.png"
import diceTwo from "./../../assets/images/dice2.png"
import diceThree from "./../../assets/images/dice3.png"
import diceFour from "./../../assets/images/dice4.png"
import diceFive from "./../../assets/images/dice5.png"
import diceSix from "./../../assets/images/dice6.png"



function Dice() {

    const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
    const [diceNum, setDiceNum] = useState(0)

    const handleClickChangeDice = () => {
        const randomNum = Math.floor(Math.random() * 6)
        setDiceNum(randomNum)
    }

    return (
        <img src={diceImages[diceNum]} alt="" onClick={handleClickChangeDice} />
    )
}
export default Dice