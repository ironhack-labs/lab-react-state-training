import { useState } from "react";
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
    const randomImage = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [dice, setDice] = useState(randomImage[Math.floor(Math.random() * randomImage.length)]);


    const getRandomDice = () => {
        setDice(diceEmpty);

        const intervalId = setInterval(() => {
            let random = Math.floor(Math.random() * randomImage.length);
            let img = randomImage[random];
            setDice(img);
            clearInterval(intervalId);
        }, 1000);

    }

    return (
        <div>
            <img className="dice" src={dice} alt="picture of an empty dice" onClick={getRandomDice}/>
        </div>
    )

}

export default Dice;