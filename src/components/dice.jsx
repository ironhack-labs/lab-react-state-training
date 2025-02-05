import React, { useState } from "react";

export default function Dice() {
    
    const randomDice = Math.floor(Math.random() * 6) + 1; 
    
    const [diceImage, setDiceImage] = useState(`../src/assets/images/dice${randomDice}.png`);

    
    const handleClick = () => {
       
        setDiceImage('../src/assets/images/dice-empty.png');

        
        setTimeout(() => {
            
            setDiceImage(`../src/assets/images/dice${randomDice}.png`);  
        }, 1000);  
    };

    return (
        <div>
            <img  src={diceImage} alt="Dice"  onClick={handleClick} style={{ cursor: "pointer", width: "100px", height: "100px" }} />
        </div>
    );
}