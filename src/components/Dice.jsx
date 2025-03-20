import React from "react"; 
import three from '../assets/images/dice3.png';
import { useState } from "react";
import empty from '../assets/images/dice-empty.png';
import six from '../assets/images/dice6.png';

function Dice() {
    const [newDice, setNewDice] = useState(three);
    const swapDice = () => {
        setNewDice(empty)
    setTimeout(() => {
        setNewDice(six)
    }, 1000);}
    return (
        <div>
            <img src={newDice} onClick={swapDice} alt="dice" style={{cursor:'pointer'}} />
        </div>
    );
}
    export default Dice;
