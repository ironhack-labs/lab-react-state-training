import {useState} from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"


function Dice () {

    const diceImages = [
        diceEmpty,
        dice1,
        dice2,
        dice3,
        dice4, 
        dice5,
        dice6
    ]

    const [currentlyDiceState, setCurrentlyDiceState] = useState (RandomDice());

    function RandomDice () {
        return Math.floor(Math.random() * 6) + 1;
    }

     function handleClick () {
        setCurrentlyDiceState(0);

        setTimeout(() => {
            setCurrentlyDiceState(RandomDice());
        }, 1000);
     }

    return (
        <div>
            <h3>Iteration 4</h3>
            <img
            onClick={handleClick}
            src={diceImages[currentlyDiceState]}
            alt="Dice"
            style={{cursor: "pointer", width: "200px"}}
            />
        </div>
    )
}

export default Dice;