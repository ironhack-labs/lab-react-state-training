import { useState } from "react";

export default function Dice() {
    const randomNumber = Math.ceil(Math.random()*6);
    /* console.log(randomNumber); */
    /* const diceImages = [
        '../src/assets/images/dice1.png',
        '../src/assets/images/dice2.png',
        '../src/assets/images/dice3.png',
        '../src/assets/images/dice4.png',
        '../src/assets/images/dice5.png',
        '../src/assets/images/dice6.png'
    ] */
    const [dice, setDice] = useState(randomNumber);
    const diceImg = `../src/assets/images/dice${dice}.png`;

    const handleDiceChange = () => {
        setDice("-empty")
        setTimeout(() => {
            setDice(randomNumber)
        }, 1000);
    }
    
    return (
        <>
            <img className="dice-img" onClick={() => handleDiceChange()} src={diceImg} alt="dice" />
        </>
    );
}