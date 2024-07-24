import { useState } from 'react'
import Dice1 from '../assets/images/dice1.png'
import Dice2 from '../assets/images/dice2.png'
import Dice3 from '../assets/images/dice3.png'
import Dice4 from '../assets/images/dice4.png'
import Dice5 from '../assets/images/dice5.png'
import Dice6 from '../assets/images/dice6.png'
import DiceEmpty from '../assets/images/dice-empty.png'

function Dice(){
    const [picture,setPicture] = useState(Dice3);

    const togglePicture=()=>{

    setPicture(DiceEmpty)
    };

    return(
        <>
        <div>
        <img  src={picture} alt="Dice" onClick={togglePicture} />
        
        </div>
        </>
    )
}

export default Dice;