import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import { useState } from 'react';

function Dice(){
    const dicePictureArr = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomNumber = Math.floor(Math.random() * (6 - 1 +1)) + 1;
    const [dicePosition, setDiceposition] = useState(dicePictureArr[randomNumber])
    
    const handleClick = () => {
        setDiceposition(emptyDice);
        setTimeout(() => {
            setDiceposition(dicePictureArr[randomNumber])
        }, "1000");
    };


    
    return(
        <img onClick = {handleClick} src= {dicePosition} alt="dice" />
    )
}
export default Dice;