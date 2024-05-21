import React, { useState } from "react";

const Dice = ({diceEmpty, dice1}) =>{
    const [diceImage, setDiceImage] = useState("../assets/images/dice-empty.png");

    const handleClick = () =>{
        setDiceImage("../assets/images/dice-empty.png");
        setTimeout(()=>{
            const randomNumber = Math.floor(Math.random()*6) + 1;
            setDiceImage(`../assets/images/dice${randomNumber}.png`)
        },1000)
    }

    return( <img src={diceImage} alt="Dice" onClick={handleClick} style={{ cursor: 'pointer' }} />)

}
export default Dice;