import { useState } from 'react'
import DiceEmpty from './../../assets/images/dice-empty.png'
import Dice1 from './../../assets/images/dice1.png'
import Dice2 from './../../assets/images/dice2.png'
import Dice3 from './../../assets/images/dice3.png'
import Dice4 from './../../assets/images/dice4.png'
import Dice5 from './../../assets/images/dice5.png'
import Dice6 from './../../assets/images/dice6.png'
import './Dice.css'

const Dice = () => {

    const images = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
    const [dice, setDice] = useState(Dice3)

    const randomImage = () => {

        setTimeout(() => {
            const randomDice = Math.floor(Math.random() * images.length)
            setDice(images[randomDice])
        }, "1000");
        setDice(DiceEmpty)
    }

    return (

        <div className="Dice">
            <h3>Exercise 4</h3>
            <hr />
            <img className='containerDice'
                src={dice}
                alt="Dice"
                onClick={randomImage}
            />

        </div>
    )
}
export default Dice
