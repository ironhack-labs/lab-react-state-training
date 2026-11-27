import {useState} from "react"

import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

const diceImg = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
]

function Dice() {

    const [picture, setPicture] = useState(
        ()=> diceImg[Math.floor(Math.random() * diceImg.length)]

    )

    function handleClick() {
        if (picture===diceEmpty) {
            
            return

        }

            setPicture(diceEmpty)

            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() *diceImg.length)

                setPicture(diceImg[randomIndex])

            }, 1000)


        }
          
        return (
            <img
               className="dice"
               src={picture}
               onClick={handleClick}
               alt="Dice"
            />

        )

    }

export default Dice