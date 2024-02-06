import { useState } from "react";
import dice  from '../assets/images/dice-empty.png' 
import dice1 from  '../assets/images/dice1.png'
import dice2  from  '../assets/images/dice2.png'
import dice3   from  '../assets/images/dice3.png'
import dice4   from  '../assets/images/dice4.png'
import dice5  from  '../assets/images/dice5.png'
import dice6  from  '../assets/images/dice6.png'

function Dice(){
    const diceSides = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomSide = diceSides[Math.floor(Math.random() * 6)]

    const [side, setSide] = useState(randomSide)

    const rollDice = () => {
        setSide(dice);
        setTimeout(() => setSide(randomSide), 1000);
    }
    return(
        <div>
            <img onClick={rollDice} src={side} height={100} width={100} alt="Dado"/>
        </div>
    )
}

export default Dice
