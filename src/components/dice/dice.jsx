import diceEmpty from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"
import { useState } from "react"

function Dice() {
    const arrayOfDices = [dice1, dice2, dice3, dice4, dice5, dice6];
    const randomDice = Math.floor(Math.random() * arrayOfDices.length);
    const [currentDice, setCurrentDice] = useState(arrayOfDices[randomDice]);

    const toggleDice = () => {
        setCurrentDice(diceEmpty);
        setTimeout(() => {
            setCurrentDice(arrayOfDices[randomDice]);
        }, 1000);
    }

    return (
        <img src={currentDice} onClick={toggleDice} style={{ width: "100px", height:"100px" }} alt="Dice Image" />
    );
}

export default Dice;