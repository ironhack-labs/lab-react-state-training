import React, { useState } from "react";
import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'


const Dice = () => {
    const [diceIndex, setDiceIndex] = useState(0)

    const dices = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]


    const handleRollLike = () => {
        const randomIndex = Math.floor(Math.random() * 6) + 1
        setDiceIndex(randomIndex)
    }


    return (
        <div className="diceContainer">
            <img
                src={dices[diceIndex]}
                onClick={() => setTimeout(handleRollLike, 1000)}
                alt="Dice"
            />

        </div>
    )
}


export default Dice