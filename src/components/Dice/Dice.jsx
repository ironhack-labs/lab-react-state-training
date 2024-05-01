import { useState } from 'react'
import EmptyDice from './../../assets/images/dice-empty.png'
import Dice1 from './../../assets/images/dice1.png'
import Dice2 from './../../assets/images/dice2.png'
import Dice3 from './../../assets/images/dice3.png'
import Dice4 from './../../assets/images/dice4.png'
import Dice5 from './../../assets/images/dice5.png'
import Dice6 from './../../assets/images/dice6.png'



const Dice = () => {

    const diceImages = [EmptyDice, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const [diceImage, setDiceImage] = useState(EmptyDice)

    const DiceRoll = () => {

        // Roll it random after 1000
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * diceImages.length);
            setDiceImage(diceImages[randomNumber]);
        }, 1000);
    };


    return (
        <div className="Dice">

            <h2>Let's Roll! 🎲</h2>
            <img
                src={diceImage}
                alt="Dice"
                onClick={DiceRoll}
            />

        </div>
    )
}
export default Dice