import { useState } from "react";
import emptydice from "../assets/images/dice-empty.png";
import one from "../assets/images/dice1.png";
import two from "../assets/images/dice2.png";
import three from "../assets/images/dice3.png";
import four from "../assets/images/dice4.png";
import five from "../assets/images/dice5.png";
import six from "../assets/images/dice6.png";
import "./dice.css"

function Dice(){

    const diceArr = [one, two, three, four, five, six]
    let dice;

    let randomNum = Math.floor(Math.random()*(diceArr.length) )
    const [num, setDice] = useState(diceArr[0])
    
    function clickDice(){
        dice = emptydice;

        setTimeout(()=>{
            setDice(diceArr[randomNum])
        },1000)
    }

    return (
            <img className="dice" onClick={()=>setDice(clickDice)} src={num}/>
    )
}

export default Dice;