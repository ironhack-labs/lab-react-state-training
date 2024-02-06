import { useState } from 'react'
import emptyPicture from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import './Dice.css'


const Dice = () => {

    const [currentImage, setCurrentImage] = useState(emptyPicture)
    const images = [emptyPicture, dice1, dice2, dice3, dice4, dice5, dice6]

    const handleDice = () => {
        setCurrentImage(emptyPicture)

        setTimeout(() => {
            const randomImage = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomImage])

        }, 1000)

    }

    return (
        <div className='Dice'>
            <img src={currentImage} alt="dice" onClick={handleDice} />
        </div>
    )
}

export default Dice

