import {useState} from 'react';
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import "./Dice.css";



function Dice (props) {
    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [dice, setDice] = useState(Math.floor(Math.random() * 6));

    function rollDice() {
        setDice("none");
        setTimeout(()=> 
        setDice(Math.floor(Math.random() * 6)), 1000 
    )
      
    }
    return (
        <>
        <img id={props.id} onClick={rollDice} src={dice !== "none" ? diceArray[dice] : diceEmpty} alt = "random dice face" />
        </>
    )
}

export default Dice;