import { useState } from "react"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import diceEmpty from "../assets/images/dice-empty.png"

function Dice () {
let [number, setNumber] = useState(0)
const faces = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]

const randomNumber = () => {
  setNumber(0)
  
  setTimeout(() => {
    const result = Math.floor(Math.random() * 6) + 1;
      setNumber(result);
  }, 1000);
}

const diceStyle = {
  width: 100
}

  return (
    <div>
    <img style={diceStyle} onClick={randomNumber} src={faces[number]}></img>
    </div>
  )
}

export default Dice