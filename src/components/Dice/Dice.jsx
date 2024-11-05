import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice5.png'
import { useState } from 'react'
import './Dice.css'


const Dice = () => {

    const dados = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [image, setImage] = useState(diceEmpty)

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * dados.length)
        setImage(dados[randomNumber])
    }
    return (
        <div className="Dice">
            <div onClick={handleClick}>

                <img src={image} alt="dados" />
            </div>

        </div>
    )
}
export default Dice