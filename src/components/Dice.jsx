import { useState } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"


const Dice = () => {

    const [ramdonDice, setRamdonDice] = useState(0)

    const getRamdonDice = () => {
        setRamdonDice(0)
        setTimeout(() => {
            setRamdonDice(Math.floor(Math.random() * 7))
        }, 1000);

    }

    let selectImg

    switch (ramdonDice) {
        case 1:
            selectImg = dice1
            break;
        case 2:
            selectImg = dice2
            break;
        case 3:
            selectImg = dice3
            break;
        case 4:
            selectImg = dice4
            break;
        case 5:
            selectImg = dice5
            break;
        case 6:
            selectImg = dice6
            break;
        case 0:
            selectImg = diceEmpty
            break;

    }
    return (
        <img onClick={getRamdonDice} className="dado" src={selectImg} alt="" srcset="" />
    )
}

export default Dice