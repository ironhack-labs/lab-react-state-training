import './Dice.css'
import { useState } from 'react'
import emptyDice from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'



function Dice() {

    const diceImg = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6]
    const [currentDice, setCurrentDice] = useState(emptyDice)

    const handleDice = () => {
        setCurrentDice(currentDice)

        setTimeout(() => {
            const randomImg = Math.floor(Math.random() * diceImg.length);
            setCurrentDice(diceImg[randomImg])

        }, 1000)
    }


    return (
        <div className='dice'>
            <img onClick={handleDice} src={currentDice} alt="Dice" />
        </div>
    )

}

export default Dice