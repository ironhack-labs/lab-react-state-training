import { useState } from "react";

import image1 from '../assets/images/dice-empty.png';
import image2 from '../assets/images/dice1.png';
import image3 from '../assets/images/dice2.png';
import image4 from '../assets/images/dice3.png';
import image5 from '../assets/images/dice4.png';
import image6 from '../assets/images/dice5.png';
import image7 from '../assets/images/dice6.png';

const Dices = [
    image1, 
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
];

function Dice() {
    const [currentDice, setCurrentDice] = useState(Dices[0]); 

    const handleDiceClick = () => {
        setCurrentDice(Dices[0]); 
        setTimeout(() => { 
            const randomIndex = 1 + Math.floor(Math.random() * 6); 
            setCurrentDice(Dices[randomIndex]);
        }, 500); 
    };

    return (
        <div>
            <img src={currentDice} onClick={handleDiceClick} alt="Clickable dice" />
        </div>
    );
}

export default Dice;
