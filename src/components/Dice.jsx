import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

import './Dice.css'

import { useState } from "react";

export function Dice() {

    const [currentDice,chooseCurrentDice] = useState(emptyDice);

    const chooseRandomDice = () => {
        const randomNumber = Math.floor(Math.random()*6);
        switch (randomNumber){
            case 0:
                chooseCurrentDice(emptyDice)
                setTimeout(()=>{
                    chooseCurrentDice(dice1)
                },1000)
                break;
            case 1:
                chooseCurrentDice(emptyDice)
                setTimeout(()=>{
                    chooseCurrentDice(dice2)
                },1000)
                break;
            case 2:
                chooseCurrentDice(emptyDice)
                setTimeout(()=>{
                    chooseCurrentDice(dice3)
                },1000)
                break;
            case 3:
                chooseCurrentDice(emptyDice)
                setTimeout(()=>{
                    chooseCurrentDice(dice4)
                },1000)
                break;
            case 4:
                chooseCurrentDice(emptyDice)
                setTimeout(()=>{
                    chooseCurrentDice(dice5)
                },1000)
                break;
            case 5:
                chooseCurrentDice(emptyDice)
                setTimeout(()=>{
                    chooseCurrentDice(dice6)
                },1000)
                break;
        }
    
    }
    return (
        <div>
            <img src={currentDice} onClick={chooseRandomDice} className="dice-image"  />
        </div>
    )
}