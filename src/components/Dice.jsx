import { useState } from "react";

function Dice() {

    const diceImages = [
    "/src/assets/images/dice1.png",
    "/src/assets/images/dice2.png",
    "/src/assets/images/dice3.png",
    "/src/assets/images/dice4.png",
    "/src/assets/images/dice5.png",
    "/src/assets/images/dice6.png"
    ];


    const [dice, setDice] = useState(diceImages[0]);

    const playDice = () => {
        setDice("/src/assets/images/dice-empty.png");
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6);
            setDice(diceImages[randomNumber]);
        }, 1000);
    };

    return (
        <img
            src={dice}
            alt="dice"
            width="120"
            onClick={playDice}
        />
    );
};


export default Dice;