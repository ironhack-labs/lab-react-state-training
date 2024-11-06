import { useState } from "react"

import dice6 from "/src/assets/images/dice6.png"
import dice3 from "/src/assets/images/dice3.png"
import dice0 from "/src/assets/images/dice-empty.png" 
import dice1 from "/src/assets/images/dice1.png"
import dice2 from "/src/assets/images/dice2.png"
import dice4 from "/src/assets/images/dice4.png"
import dice5 from "/src/assets/images/dice5.png"

function Dice () {
    
    const [dice, setDice] = useState(dice0)

    const array = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
    
    function rollDice() {
        
        setTimeout(()=>{
            let item = array[Math.floor(Math.random()*array.length)];   
            return setDice(item)
            
        }, 1000)

        return setDice(dice0)
    }

    return(
        <img onClick={()=>{rollDice()}} src={dice} alt="dice" />
    )
    
}

export default Dice