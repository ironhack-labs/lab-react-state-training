import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";
import { useState } from "react";

function Dice (props) {

    const allDices = [DiceEmpty,Dice1,Dice2,Dice3,Dice4,Dice5,Dice6];

    const randomDiceSide = allDices[Math.floor(Math.random() * allDices.length)];

    const [rand,setRand] = useState(randomDiceSide)

    const randomDice = ()=> {setRand(DiceEmpty); setTimeout(()=>setRand(randomDiceSide),1000)};

    return (
        <div>
            <h1>Dice</h1>
            <img src = {rand} alt="random dice side" width={150} height={150} onClick={randomDice}></img>
        </div>
    )

}

export default Dice