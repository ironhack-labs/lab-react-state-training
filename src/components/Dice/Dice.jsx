import { useState } from 'react'
import './Dice.css'
import emptyDice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]

const Dice = () => {

    const [diceImage, setImage] = useState(dice1)

    const changeDice = () => {

        setImage (emptyDice)

        setTimeout(() => {

            let randomDice = Math.floor(Math.random() * 6)
            setImage(diceArray[randomDice])

          }, 1000)

    }

    return (

        <div className='Dice' >
            <img src={diceImage} onClick={changeDice} alt="" />
        </div>


    )
}

export default Dice

