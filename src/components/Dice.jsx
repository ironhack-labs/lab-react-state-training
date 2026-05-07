import {useState} from 'react'
import DiceEmpty from '../assets/images/dice-empty.png'
import Dice1 from '../assets/images/dice1.png'
import Dice2 from '../assets/images/dice2.png'
import Dice3 from '../assets/images/dice3.png'
import Dice4 from '../assets/images/dice4.png'
import Dice5 from '../assets/images/dice5.png'
import Dice6 from '../assets/images/dice6.png'

export default function Dice() {
    const [dice, setDice] = useState(Dice2)

    const rollDice = () =>{
        setDice(DiceEmpty)

        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 6) + 1;
            const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice4, Dice5, Dice6]
            setDice(diceImages[randomNum - 1])
            
        }, 1000);
    }
  return (
    <div>
        <img src={dice} onClick={rollDice}/>
    </div>

  )
}
