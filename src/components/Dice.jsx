import imgCara1 from "../assets/images/dice1.png"
import imgCara2 from "../assets/images/dice2.png"
import imgCara3 from "../assets/images/dice3.png"
import imgCara4 from "../assets/images/dice4.png"
import imgCara5 from "../assets/images/dice5.png"
import imgCara6 from "../assets/images/dice6.png"
import imgEmpty from "../assets/images/dice-empty.png"
import { useState } from "react"

function Dice() {
  const carasArr = [imgCara1, imgCara2, imgCara3, imgCara4, imgCara5, imgCara6, imgEmpty]

  let [caraDado, setCaraDado] =  useState(carasArr[Math.floor(Math.random() * carasArr.length)])


  const handleRandomCara = () => {
    setCaraDado(imgEmpty)

    setTimeout(() => {
      setCaraDado(carasArr[Math.floor(Math.random() * carasArr.length)])

    }, 1000)
  }

  return (
    <div>
      <img onClick={handleRandomCara} style={{width: "300px", margin:"20px"}} src={caraDado} alt="dado" />
    </div>
  )
}

export default Dice