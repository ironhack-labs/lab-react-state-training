import { useState } from "react";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import dice0 from "../assets/images/dice-empty.png"


function Dice () {

    const dicesArray = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
    const randomIndex = Math.floor((Math.random() * 6) + 1)


    const [dice, setDice] = useState(dicesArray[randomIndex]);

    function clickDice(){
        setDice(dice0)
        setTimeout(()=>{
            setDice(dicesArray[randomIndex])
        },1000)
    }

    return (
        <div>
            <img onClick={() => setDice(clickDice)} src={dice} alt="" className="dice-image"/>

        </div>

             )
}

export default Dice;

