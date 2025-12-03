import { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    // Estado: comienza mostrando un dado aleatorio (puede ser dice3, dice5, etc.)
    const getRandomDice = () => diceImages[Math.floor(Math.random() * 6)];

    const [currentDice, setCurrentDice] = useState(getRandomDice());

    const rollDice = () => {
        // 1) Mostrar dado vacío
        setCurrentDice(emptyDice);

        // 2) Después de 1 segundo, mostrar nuevo aleatorio
        setTimeout(() => {
            setCurrentDice(getRandomDice());
        }, 1000);
    };

    return (
        <div className="Box">
            <section>
                <h2>Iteración 4 | Estado:Dice</h2>
                <img
                    src={currentDice}
                    alt="dice"
                    onClick={rollDice}
                    style={{ width: "150px", cursor: "pointer" }}
                />
            </section>

        </div>
    );
}

export default Dice;