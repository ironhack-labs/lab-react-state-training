
import emptyDice from '../assets/images/dice-empty.png'
import one from '../assets/images/dice1.png'
import two from '../assets/images/dice2.png'
import three from '../assets/images/dice3.png'
import four from '../assets/images/dice4.png'
import five from '../assets/images/dice5.png'
import six from '../assets/images/dice6.png'
import { useState } from 'react'

function Dice(){
    const [currentDice, setDice] = useState(three)
    const allDice = [one, two, three, four, five, six]
    
    function changeDice(){
        setDice(emptyDice)
        setTimeout(() => {
            const randomDice = Math.floor(Math.random() * allDice.length)
            setDice(allDice[randomDice])
        }, 1000)
    }

    return(
        <img width= "100px" onClick={changeDice} src={currentDice} alt="dice" />
    )
}

export default Dice;