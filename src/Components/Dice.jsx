import React, { useState } from 'react'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import diceEmpty from '../assets/images/dice-empty.png'

const Dice = () => {
    const [dice, setDice] = useState([
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6,
    ])

    const [emptyDice, setEmptyDice] = useState(false)
    const [diceToDisplay, setDiceToDisplay] = useState(dice[1])

    const handleDiceClick = () => {
        console.log('handleDiceClick')
        setEmptyDice(true)
        setTimeout(() => {
            setDiceToDisplay(dice[Math.floor(Math.random() * dice.length)])
            setEmptyDice(false)
        }, 1000)
    }

    return (
        <div style={{ width: '20px' }}>
            {emptyDice ? (
                <img
                    onClick={handleDiceClick}
                    src={diceEmpty}
                    alt="Dice"
                    style={{
                        width: '100px',
                        height: '100px',
                    }}
                />
            ) : (
                <img
                    onClick={handleDiceClick}
                    src={diceToDisplay}
                    alt="Dice"
                    style={{
                        width: '100px',
                        height: '100px',
                    }}
                />
            )}
        </div>
    )
}

export default Dice