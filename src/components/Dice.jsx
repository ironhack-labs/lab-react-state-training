import { useState } from "react";
import diceEmpty from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';
    

export default function Dice () {

    const images = [diceEmpty, diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
   
    const [image, setImage] = useState(images[0]);


    const randomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    const imageChange = () => {
        setImage(randomImage());
    }

    return (
        <div>
            <img src={image} onClick={imageChange} />
        </div>
    )
};