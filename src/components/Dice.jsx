import { useState } from "react";
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
    const [diceValue, setDiceValue] = useState(0);

    const rollDice = () => {
        setDiceValue(0);

        setTimeout(() => {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            setDiceValue(randomValue);
        }, 500);
    };

    const getDiceImage = () => {
        switch (diceValue) {
            case 1:
                return dice1;
            case 2:
                return dice2;
            case 3:
                return dice3;
            case 4:
                return dice4;
            case 5:
                return dice5;
            case 6:
                return dice6;
            default:
                return diceEmpty;
        }
    };

    return (
        <div onClick={rollDice}>
            <img src={getDiceImage()} alt="Dice" />
        </div>
    );
}

export default Dice;