import { useState } from "react";
import Dice from '../assets/images/dice-empty.png'
import Dice1 from '../assets/images/dice1.png'
import Dice2 from '../assets/images/dice2.png'
import Dice3 from '../assets/images/dice3.png'
import Dice4 from '../assets/images/dice4.png'
import Dice5 from '../assets/images/dice5.png'
import Dice6 from '../assets/images/dice6.png'

function DiceGame(){
    
    const diceImages =[ Dice1,Dice2,Dice3,Dice4,Dice5,Dice6]
    const [currentImage, setCurrentImage]= useState(Dice)
    const rollDice = () => {
        setCurrentImage(Dice);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * diceImages.length);
            setCurrentImage(diceImages[randomIndex]);
        }, 1000);
    };
   return (
    <img src={currentImage}
    alt="Dice"
    onClick={rollDice}
    />
   );

}

export default DiceGame; 