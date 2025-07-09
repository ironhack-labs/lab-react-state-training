import React, { useState } from 'react';
import DiceFaces from '../DiceFaces.json'; 
import BlankFace from '../assets/images/dice-empty.png';

function Dice({ className }) {
    
    const [currentDice, setCurrentDice] = useState(
        DiceFaces[Math.floor(Math.random() * DiceFaces.length)].url
    );

    const ThrowDice = () => {
        
        setCurrentDice(BlankFace);

        setTimeout(() => {
            
            const randomIndex = Math.floor(Math.random() * DiceFaces.length);
            setCurrentDice(DiceFaces[randomIndex].url);
        }, 1000);
    };

    return (

        <img
            className={className}
            src={currentDice}
            alt="Dice"
            onClick={ThrowDice}

        />
    );
}

export default Dice;




