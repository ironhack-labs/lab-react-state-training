import { useState } from "react"
import './Dice.css'
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

function Dice() {

    const dicePool = [dice1, dice2, dice3, dice4, dice5, dice6]

    function rollDice() {
        const roll = Math.floor(Math.random() * 6)
        return dicePool[roll]
    }

    const [dice, setDice] = useState(rollDice())

    function handleDice() {
        setDice(diceEmpty)
        setTimeout(() => {
            setDice(() => rollDice())
        }, 1000)
    }

    return (
        <div className="dice">
            <img
                src={dice}
                alt="dice"
                onClick={handleDice}
            />
        </div>
    )

}

export default Dice