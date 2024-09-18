import { useState } from 'react'
import dice3 from '../assets/images/dice3.png'
import dice0 from '../assets/images/dice-empty.png'
import dice6 from '../assets/images/dice6.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'

function Dice() {
    const arrDices = [dice1, dice2, dice3, dice4, dice5, dice6]

    let [change, setChange] = useState(dice0)

    const handleChange = () => {
        setChange(dice0)
    }

    setTimeout(() => {
        const randomDicePicture = Math.floor(Math.random() * arrDices.length)
        setChange(arrDices[randomDicePicture])
    }, 1000)

    return (
        <div>
            <img className='dice'
                src={change}
                onClick={handleChange} />
        </div>
    )
}

export default Dice