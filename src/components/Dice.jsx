import  {useState} from "react"

import diceCero from '../assets/images/dice-empty.png'
import diceUno from '../assets/images/dice1.png'
import diceDos from '../assets/images/dice2.png'
import diceTres from '../assets/images/dice3.png'
import diceCuatro from '../assets/images/dice4.png'
import diceCinco from '../assets/images/dice5.png'
import diceSeis from '../assets/images/dice6.png'

function Dice(){

        const [dice, setNum] = useState(diceCero)
        const handleDice = () => {
            const randomNum = Math.floor(Math.random() * 6) +1
            
                
        }
        return(
<div>
          <img src={dice} alt= "Dice" onClick={handleDice}/>
          
      </div>

        )

}

export default Dice