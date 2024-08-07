import { useState } from "react";

export function Dice () {
    const diceArr = [
        "./src/assets/images/dice1.png",
        "./src/assets/images/dice2.png",
        "./src/assets/images/dice3.png",
        "./src/assets/images/dice4.png",
        "./src/assets/images/dice5.png",
        "./src/assets/images/dice6.png", 
    ]

    const randomDice = diceArr[Math.floor(Math.random() * 6)]

    const [currDice, setCurrDice] = useState(randomDice);

    const changeDice = () => {
        setCurrDice("./src/assets/images/dice-empty.png")
        setTimeout(() => {
            setCurrDice(randomDice);
        }, 1000);
    }

    return (
        <img
        src={currDice}
        alt="Changeable dice"
        onClick={changeDice}
        className="dice"
        />
    )
}