import { useState } from "react";
import DiceImage0 from './images/dice-empty.png'
import DiceImage1 from './images/dice1.png'
import DiceImage2 from './images/dice2.png'
import DiceImage3 from './images/dice3.png'
import DiceImage4 from './images/dice4.png'
import DiceImage5 from './images/dice5.png'
import DiceImage6 from './images/dice6.png'


function Dice () 
{
 let diceImages = [
    DiceImage0,
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
 ]
 
 const [image, setNewImage] = useState(diceImages[0])
 
 const rollDice = () => {
    //Generate random number
    let randomNum1 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
 }

   return (
   <div className="Roller">
   <center>
    <h1>Roll the Dice!</h1>
    <div className="container">
        <img className="square" src={image} ></img>
    </div>
    <button className="Roll-button" onClick={rollDice}>Roll Dice</button>
   </center>
    </div> 
   )
}

export default Dice