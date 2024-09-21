import React, { useState } from 'react'
import emptyDice from "../assets/images/dice-empty.png"
import diceOne from "../assets/images/dice1.png"
import diceTwo from "../assets/images/dice2.png"
import diceThree from "../assets/images/dice3.png"
import diceFour from "../assets/images/dice4.png"
import diceFive from "../assets/images/dice5.png"
import diceSix from "../assets/images/dice6.png"

function Dice() {

  const [dice, setDice] =useState(emptyDice)

  const dices = [diceOne,diceTwo,diceThree,diceFour,diceFive, diceSix]
  const randomDiceIndex = Math.floor(Math.random() * dices.length)
  const randomDice = dices[randomDiceIndex]

let handleClick = () =>{

    setDice(randomDice)

  }
  return (
    <div>

      <img onClick={handleClick} src={dice} alt="dice" />
    </div>

  )
}

export default Dice