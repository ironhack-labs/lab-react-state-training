import { useState } from "react"
import empty from "../assets/images/dice-empty.png"
import one from "../assets/images/dice1.png"
import two from "../assets/images/dice2.png"
import three from "../assets/images/dice3.png"
import four from "../assets/images/dice4.png"
import five from "../assets/images/dice5.png"
import six from "../assets/images/dice6.png"

function Dice() {

  const dices = [ one, two, three, four, five, six ]
  const randomDiceIndex = Math.floor(Math.random() * dices.length)
  const randomDice = dices[randomDiceIndex]

  const [ dice, setDice ] = useState(randomDice)

  const handleClick = () => {

    setDice(empty);

    setTimeout(() => {
      
      setDice(randomDice)
    }, 1000);
  }

  return (
    <div className="dice">
      <img onClick={handleClick} src={dice} alt="Dice" />
    </div>
  )
}

export default Dice