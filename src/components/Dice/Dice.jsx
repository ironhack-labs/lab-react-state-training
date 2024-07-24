import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import emptyDice from './../../assets/images/dice-empty.png'
import { useState } from 'react'

const Dice = () => {

    const allDices = [dice1, dice2, dice3, dice4, dice5, dice6]
    const random = Math.floor(Math.random() * 5)


    const [dice, setDice] = useState(true)


    const handleDice = () => {

        setDice(!dice)

        setTimeout(() => {
            setDice(dice)

        }, 1000)
    }


    return (
        <div className='Dice'>
            <img onClick={handleDice} src={dice ? allDices[random] : emptyDice} alt="Dice" />
        </div>
    )
}

export default Dice;