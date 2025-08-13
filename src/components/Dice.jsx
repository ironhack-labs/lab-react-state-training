import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import dice0 from "../assets/images/dice-empty.png"

import { useState } from "react"

function Dice() {
  const [diceValue, setDiceValue] = useState(0)

  const diceImgArr = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
  const throwDice = () => setDiceValue(Math.floor(Math.random() * 6) + 1);
  const handleClick = () => {
    setDiceValue(0);
    setTimeout(throwDice, 1000);
  }

  return (
    <div className="dice-container">
      <img src={diceImgArr[diceValue]} alt="Dice" onClick={handleClick}/>
    </div>
  )
}
export default Dice