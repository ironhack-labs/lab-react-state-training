import { useState } from 'react'
import diceEmpty from './../assets/images/dice-empty.png'
import dice1 from './../assets/images/dice1.png'
import dice2 from './../assets/images/dice2.png'
import dice3 from './../assets/images/dice3.png'
import dice4 from './../assets/images/dice4.png'
import dice5 from './../assets/images/dice5.png'
import dice6 from './../assets/images/dice6.png'


const Dice = () => {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
  const [dice, setDice] = useState(dices[0])
  const setRandomIndex = () => {
    return Math.floor(Math.random() * 6)
  }
  const handleDices = () => {
    setDice(diceEmpty)
    setTimeout(() => {
      setDice(dices[setRandomIndex()])
    }, 1000)
  }
  return (
    <span className='Dice'>
      <img src={dice} alt="Dice" onClick={handleDices} />
    </span>
  )
}

export default Dice