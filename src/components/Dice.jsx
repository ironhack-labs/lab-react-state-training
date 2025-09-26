import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {

    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    const getRandomDice = () => diceImages[Math.floor(Math.random() * diceImages.length)];

    const [currentDice, setCurrentDice] = useState(getRandomDice());

    const rollDice = () => {
        // Paso 1: Mostrar el dado vacío
        setCurrentDice(diceEmpty);

        // Paso 2: Después de 1 segundo, mostrar un número aleatorio
        setTimeout(() => {
            setCurrentDice(getRandomDice());
        }, 1000);
    };

    return (
        <div>
            <img
                src={currentDice}
                alt="dice"
                onClick={rollDice}
            />
        </div>
    );
}

export default Dice;


