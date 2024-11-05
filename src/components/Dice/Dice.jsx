import { useState } from 'react'
import './Dice.css'
import emptyDice from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'

const Dice = () => {

    const [rollDice, setRollDice] = useState(dice3)

    const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6]

    const handleDiceClick = () => {
        setRollDice(emptyDice)

        setTimeout(() => {
            const randomDice = Math.floor(Math.random() * diceFaces.length)
            setRollDice(diceFaces[randomDice])
        }, 1000)
    }

    return (
        <div className="Dice" onClick={handleDiceClick}>
            <img src={rollDice} alt="Dice" />
        </div>
    )
}

export default Dice
