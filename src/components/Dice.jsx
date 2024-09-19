import React, { useState } from 'react'

import empty from "../assets/dice/dice-empty.png"
import dice1 from "../assets/dice/dice1.png"
import dice2 from "../assets/dice/dice2.png"
import dice3 from "../assets/dice/dice3.png"
import dice4 from "../assets/dice/dice4.png"
import dice5 from "../assets/dice/dice5.png"
import dice6 from "../assets/dice/dice6.png"


export default function Dice() {
  let dices = [empty, dice1, dice2, dice3, dice4, dice5, dice6]

  const [selectedDice, setSelectedDice] = useState(dice1)

  const handleClick = () => {
    setSelectedDice(empty)
    const randomDice = dices[Math.floor(Math.random()*dices.length)]
    setSelectedDice(randomDice)
  }
  return (
    <div>
      <img src={selectedDice} alt="dice" onClick={handleClick} style={{width:"100px"}} />
    </div>
  )
}
