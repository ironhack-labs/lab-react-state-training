import {useState} from 'react';
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import "./Dice.css";

const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];
/* let randomFace = Math.floor(Math.random() * 6); */
function Dice (props) {
    const [randomFace, setRandomFace] = useState(Math.floor(Math.random() * 6));
    function throwDice() {
        setRandomFace("none");
        setTimeout(()=> 
        setRandomFace(Math.floor(Math.random() * 6)), 1000 
    )
      
    }
    return (
        <>
        <img id={props.id} onClick={throwDice} src={randomFace !== "none" ? diceFaces[randomFace] : diceEmpty} alt = "random dice face" />
        </>
    )
}

export default Dice;
