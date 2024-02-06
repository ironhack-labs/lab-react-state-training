import { useState } from 'react';
import dice0 from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"


function Dice(props) {

    const [countDice, setCountDice] = useState(0);

    let diceArray = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];


    const rollDice = () => {
        
        setCountDice(dice0);

        setTimeout(() => {
            
            const index = Math.floor(Math.random() * diceArray.length+1);

            setCountDice(diceArray[index]); 

        }, 1000);

    };

    return <img src={countDice} alt="Dice" onClick={rollDice} />;



}

export default Dice;

