import React, { useState } from 'react'
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png"

function Dice() {

  const [diceImg, setDiceImg] = useState(dice1)

  const dice = [
   dice1, dice2, dice3, dice4, dice5, dice6
  ]

  const diceSty = {
    width: "30vw"
  }

  const handleDice = () => (
    setDiceImg(diceEmpty),
    setTimeout(()=>{  
    setDiceImg(dice[Math.floor(Math.random()* 6)])

    }, 1000)
    
  )

  return (
    <>

    <img src={diceImg} alt="" style={diceSty} onClick={handleDice}/>

    </>
  )
}

export default Dice