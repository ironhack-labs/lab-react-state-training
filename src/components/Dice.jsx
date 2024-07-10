import React from 'react'
import { useState } from 'react'

import empty from "../assets/images/dice-empty.png"
import one from "../assets/images/dice1.png"
import two from "../assets/images/dice2.png"
import three from "../assets/images/dice3.png"
import four from "../assets/images/dice4.png"
import five from "../assets/images/dice5.png"
import six from "../assets/images/dice6.png"



function Dice() {
    const [dice, setDice] = useState(empty)
    const imageArr =[one,two,three,four,five,six]

    function randomDice(){
        return imageArr[Math.floor(Math.random()*imageArr.length)]
    }

    function toggleResetShuffle(){
        setDice(dice === empty? randomDice():empty)
    }

  return (
    <div id='dice'>
        <img src={dice} alt="" onClick={toggleResetShuffle}/>
    </div>
  )
}

export default Dice