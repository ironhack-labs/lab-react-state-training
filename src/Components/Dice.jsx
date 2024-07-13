import React, { useState } from 'react'
import Dice1 from "../assets/images/dice1.png"
import EmptyDice from '../assets/images/dice-empty.png'
import Dice2 from '../assets/images/dice2.png'
import Dice3 from '../assets/images/dice3.png'
import Dice4 from '../assets/images/dice4.png'
import Dice5 from '../assets/images/dice5.png'
import Dice6 from '../assets/images/dice6.png'


function Dice() {

const[ diceValue, setDiceValue] = useState(EmptyDice) 

const handleChangeValue = () => {

    const randomDice = Math.floor(Math.random() * 6) + 1
    
    if(randomDice === 1){
        setDiceValue(Dice1);
    } else if(randomDice === 2){
        setDiceValue(Dice2)
    } else if(randomDice === 3){
        setDiceValue(Dice3)
    }else if(randomDice === 4){
        setDiceValue(Dice4)
    }else if(randomDice === 5){
        setDiceValue(Dice5)
    }else if(randomDice === 6){
        setDiceValue(Dice6)
    }

}

  return (
    <div>
        <img  src={diceValue} alt="dado" width="150px" onClick={handleChangeValue} />

    </div>
  )
}

export default Dice