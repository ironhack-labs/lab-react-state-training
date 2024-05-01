import './../Dice/Dice.css'
import emptyDice from './../../assets/images/dice-empty.png'
import diceOne from './../../assets/images/dice1.png'
import diceTwo from './../../assets/images/dice2.png'
import diceThree from './../../assets/images/dice3.png'
import diceFour from './../../assets/images/dice4.png'
import diceFive from './../../assets/images/dice5.png'
import diceSix from './../../assets/images/dice6.png'
import { useState } from 'react'

const dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

const Dice = () => {

  const [randomDice, setRandomDice] = useState(diceOne)


  const changeRandomDice = () => {
    setRandomDice(emptyDice)

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dices.length)
      setRandomDice(dices[randomIndex])
    }, 1000)

  }

  return (
    <div className='Dice'>
      <h3>Iteration 4</h3>


      <img src={randomDice} alt="Dice" onClick={changeRandomDice} />

    </div>
  )
}
export default Dice