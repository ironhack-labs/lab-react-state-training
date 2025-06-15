import { useState } from "react"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import diceEmpty from "../assets/images/dice-empty.png"

function Dice() {
  const rng = () => {
    return Math.floor(Math.random() * diceArr.length)
  }
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
  const [dice, setDice] = useState(diceArr[rng()])

  const handleDiceRoll = () => {
    setDice(diceEmpty)
    setTimeout(() => {
      setDice(diceArr[rng()])
    }, 1000)
  }

  return (
    <div>
      <img
        src={dice}
        alt="dice"
        style={{ width: "30vw" }}
        onClick={handleDiceRoll}
      />
    </div>
  )
}

export default Dice