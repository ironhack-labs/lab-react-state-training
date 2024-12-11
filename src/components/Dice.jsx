import React, { useState } from 'react';
import imgEmpty from '../assets/images/dice-empty.png';



const Dice = () => {
    const [diceImage, setDiceImage] = useState(imgEmpty);
    
    const handleClick = () => {
        setDiceImage(imgEmpty)

        setTimeout(() => {
const randomDice = Math.floor(Math.random() * 6) + 1;
setDiceImage(`../assets/images/dice${randomDice}.png`);
},1000)
}


return (
<div>
    <img
    src={diceImage}
    onClick={handleClick}
    />
</div>
)
}
export default Dice;