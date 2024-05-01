import { useState } from "react"
import './Dice.css'
import dice_empty from './../../assets/images/dice_empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'

const Dice = () => {
    const [dice, setDice] = useState(dice_empty)

    const rollDice = () => {
        setDice(dice_empty)
        setTimeout(() => {
            const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
            const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
            setDice(randomDice)
        }, 1000)
    };

    return (
        <div className='Dice' onClick={rollDice}>
            <h1>Dice</h1>
            <img src={dice} alt="Dice" />
        </div>
    );
}

export default Dice;