import diceEmpty from "../assets/images/dice-empty.png"
import diceOne from "../assets/images/dice1.png"
import diceTwo from "../assets/images/dice2.png"
import diceThree from "../assets/images/dice3.png"
import diceFour from "../assets/images/dice4.png"
import diceFive from "../assets/images/dice5.png"
import diceSix from "../assets/images/dice6.png"
import { useState } from "react"

export const Dice = () => {

    const [imgUrl, setImgUrl] = useState(diceOne)
    const dicesArr = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

    const handleDices = (e) => {
        const randomIndex = Math.round(Math.random() * dicesArr.length)
        setImgUrl(prev => diceEmpty)
        setTimeout(() => setImgUrl(prev => dicesArr[randomIndex]), 1000)
    }

    return (
        <div>
            <img src={imgUrl} alt="Dice picture" onClick={handleDices} />
        </div>
    )
}