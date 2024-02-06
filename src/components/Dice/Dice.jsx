import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import { useState } from 'react'
import './../Dice/Dice.css'

function Dice() {

    const imageArray = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]
    const [currentImage, setCurrentImage] = useState(diceEmpty)

    const getRandomImage = () => {
        setCurrentImage(diceEmpty)
        setTimeout(() => {
            const randomNumb = Math.floor(Math.random() * imageArray.length)
            setCurrentImage(imageArray[randomNumb])
        }, 1000)
    }
    return (
        <div>
            <img className='dice' onClick={getRandomImage} src={currentImage} alt='dices'></img>
        </div>
    )

}



export default Dice