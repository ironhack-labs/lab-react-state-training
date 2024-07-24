import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import diceEmpty from './../../assets/images/dice-empty.png'
import "./Dice.css"
import { useState } from 'react'

const Dice = () => {
    const randomArr = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [randomSrc, setRandomSrc] = useState(diceEmpty)

    const handleDice = () => {
        const randomIndex = Math.floor(Math.random() * randomArr.length);
        setRandomSrc(randomArr[randomIndex]);
    }


    return (
        <div className='Dice'>
            <img onClick={handleDice} src={randomSrc} alt="" />
        </div>
    )
}

export default Dice 