import { useState } from 'react';
import diceEmpty from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';

function Dice() {
    const [currentDice, setCurrentDice] = useState(diceEmpty);

    const getRandomDice = () => {
        const randomNumber = Math.ceil(Math.random() * 6); // Genera un número aleatorio del 1 al 6
        switch (randomNumber) {
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

    const handleClick = () => {
        setCurrentDice(diceEmpty); // Muestra el dado vacío
        setTimeout(() => {
            setCurrentDice(getRandomDice()); // Cambia al dado con número después de 1 segundo
        }, 1000);
    };

    return (
        <>
            <img
                onClick={handleClick}
                className="mt-5"
                width="100px"
                src={currentDice}
                alt="Dice"
            />
        </>
    );
}

export default Dice;
