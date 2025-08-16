import { useState } from "react";
import dice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [img, setImg] = useState(dice);
  const listOfDice=[dice1,dice2,dice3,dice4,dice5,dice6]
  
  const handleDiceClick = (event)=>{
    console.log("click")
    setImg(dice)
    let randomDice=listOfDice[Math.floor(Math.random() * listOfDice.length)]
    setTimeout(()=> setImg(randomDice),1000)


  }
  return (
  <>
  <img src={img} alt="dice" onClick={handleDiceClick} style={{ width: "100px", height: "100px" }}/>
  
  
  
  
  </>);
}
export default Dice;
