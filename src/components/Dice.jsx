import React, { useState } from 'react'

function Dice() {
    const [diceImage, setDiceImage] = useState('src/assets/images/dice-empty.png')

    const rollDice = () => {
        setDiceImage('src/assets/images/dice-empty.png')
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1
            setDiceImage(`src/assets/images/dice${randomNumber}.png`)
        }, 1000)
    }

    return (
        <div onClick={rollDice}>
            <img style={{width:"200px"}} src={diceImage} alt="Dice" />
        </div>
    )
}

export default Dice