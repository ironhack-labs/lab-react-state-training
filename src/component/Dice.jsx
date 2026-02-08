import React, { useState } from 'react'
import diceemp from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

export default function Dice() {
    const diceArr = [dice1,dice2,dice3,dice4,dice5,dice6]
    const random = Math.floor(Math.random() * 6)
    const [dice , setDice] = useState(dice3)
    function handleDice(){
        setDice((dice) => diceemp )
        setTimeout(() =>{
            setDice((dice) => dice = diceArr[random])
        },1000)
    }

  return (
    <div>
        <img style={{width : "100px"}} onClick={handleDice} src={dice} alt="" />
    </div>
  )
}
