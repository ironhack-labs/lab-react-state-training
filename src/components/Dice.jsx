import { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
    const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]

    let [change, setChange] = useState(diceEmpty)

    const handleChange = () => {
        setChange(diceEmpty)
    }

    setTimeout(() => {
        const randomDiceImage = Math.floor(Math.random() * diceArr.length)
        setChange(diceArr[randomDiceImage])
    }, 1000)

    return (
        <div>
            <img className='dice'
                src={change}
                onClick={handleChange} style={{cursor: 'pointer', transition: '0.3s', height:"100px"}} />
        </div>
    )
}

export default Dice