import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import emptyDice from "../assets/images/dice-empty.png"
import { useState } from "react"

function Dice() {
  
  const todasLasCaras = [dice1, dice2, dice3, dice4, dice5, dice6]
  let randomNumber = Math.floor(Math.random()*6)
  
  const [ diceFace , setDiceFace ] = useState(todasLasCaras[randomNumber])
  
  let handleRandomDice = () => {
    randomNumber = Math.floor(Math.random()*6)
    setDiceFace(emptyDice)
    setTimeout(() => {
      setDiceFace(todasLasCaras[randomNumber])
    },1000)
  }

  return (
    <>
    <p>Dice</p>
    <img onClick={handleRandomDice} style={{height:"400px"}} src={diceFace} alt="" />
    </>
  )
}

export default Dice