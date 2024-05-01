import './App.css'
import { useState } from 'react'
import diceEmpty from './assets/images/dice-empty.png'
import diceOne from './assets/images/dice1.png'
import diceTwo from './assets/images/dice2.png'
import diceThree from './assets/images/dice3.png'
import diceFour from './assets/images/dice4.png'
import diceFive from './assets/images/dice5.png'
import diceSix from './assets/images/dice6.png'



const Dice = () => {


    const [diceRandom, setDoesImg] = useState(diceEmpty)

    const generateRandomDice = () => {
        const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
        const randomDice = Math.floor(Math.random() * diceImages.length)
        setDoesImg(diceImages[randomDice])
    }

    const rollDice = () => {

        setTimeout(generateRandomDice, 1000)

    }




    return (
        <div className="ChangeImg">
            <img
                src={diceRandom}
                alt="Dice"
                onClick={rollDice}
            />

        </div>
    )
}

export default Dice