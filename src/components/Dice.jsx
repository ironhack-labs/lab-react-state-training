
import imgBefore from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

import { useState } from "react"

function Dice() {
    let [ imgAux, setImg ] = useState(imgBefore)


    const diceClick = ()=>{
        setImg(imgBefore)
        setTimeout(() => {
            let num=Math.floor(Math.random()*6)
            let dice=null;
            switch (num) {
                case 0:
                    dice=dice1
                    break;
                case 1:
                    dice=dice2
                    break;
                case 2:
                    dice=dice3
                    break;
                case 3:
                    dice=dice4
                    break;
                case 4:
                    dice=dice5
                    break;
                case 5:
                    dice=dice6
                    break;
                default:
                    dice=imgBefore
            }
            setImg(dice)
        }, 1000);    
    }

  return (
    <div className='container'>
        <img src={imgAux} alt="dice" style={{width:"250px"}} onClick={ diceClick } />
    </div>
  )
}

export default Dice