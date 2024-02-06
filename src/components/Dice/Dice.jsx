import './Dice.css'
import noDice from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import { useState } from 'react'


const Dice = () => {

    const arrayOf = [noDice, dice1, dice2, dice3, dice4, dice5, dice6]

    const [firstPic, setImgBetween] = useState(noDice)

    const getRandomImage = () => {

        setImgBetween(noDice)
        setTimeout(() => {
            const randomizer = Math.floor(Math.random() * arrayOf.length)
            setImgBetween(arrayOf[randomizer])

        }, 1000)
    }

    return (
        <div>

            <img onClick={getRandomImage} src={firstPic} alt="osjhfhs" />

        </div>
    )
}

export default Dice

//estado dado vacio
//funcion que garda el array de tofos los dados
//conts que seleccione el random
//en onclick que muestre