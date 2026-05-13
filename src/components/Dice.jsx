import { useState } from "react"
import diceEmpty from "../assets/images/dice-empty.png"

function Dice() {
  const [diceImage, setDiceImage] = useState("../assets/images/dice-empty.png")
  const [isRolling, setIsRolling] = useState(false)

  function rollDice() {
    if (isRolling) return

    setIsRolling(true)

    // Step 1: show empty dice immediately
    setDiceImage("../assets/images/dice-empty.png")

    // Step 2: after 1 second show random dice
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1
      setDiceImage(`../assets/images/dice${randomNumber}.png`)
      setIsRolling(false)
    }, 1000)
  }

  return (
    <img
      src={diceImage}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: "pointer", width: "120px" }}
    />
  )
}

export default Dice
