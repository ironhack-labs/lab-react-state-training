import { useState } from "react";
import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {
    let diceArr = [dice1,dice2,dice3,dice4,dice5,dice6]
    let randomNumber = Math.floor(Math.random() * diceArr.length)
    
    const [ num , setNum] = useState(diceArr[0]);

    let dice;

    function diceClick (){
        dice = dice0;

        setTimeout(()=>{
            setNum(diceArr[randomNumber])
        },1000)
    }


    return (
        <div>
            <img style={{ width: '100px' }} src= {num} onClick = {()=>setNum(diceClick)} ></img>
        </div>
    )

  }

  export default Dice