import {useState} from "react"
import React from 'react'
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png" 
import diceEmpty from "../assets/images/dice-empty.png"

function Dice() {
    const [cara, setCara]= useState(diceEmpty)

    function randomDice(){
      setCara(diceEmpty)
      setTimeout(()=> {
        const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
        const randomNumber = Math.floor(Math.random()*diceArr.length)
        setCara(diceArr[randomNumber])
    }, 1000)
  }

  return (
    <div>
        <img width="150px" onClick={randomDice} src={cara} alt="asdsd" />




    </div>
  )
}

export default Dice