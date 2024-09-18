import { useState } from "react"
import nada from "../assets/images/dice-empty.png"
import uno from "../assets/images/dice1.png"
import dos from "../assets/images/dice2.png"
import tres from "../assets/images/dice3.png"
import cuatro from "../assets/images/dice4.png"
import cinco from "../assets/images/dice5.png"
import seis from "../assets/images/dice6.png"

function Dice() {
    const [cara, setCara] = useState(nada)
    const handleDice = ()=>{
        const dadito = [uno, dos, tres, cuatro, cinco, seis]
        let indexCara = Math.floor(Math.random() * 6)
        setCara(dadito[indexCara])
        setTimeout(()=>setCara(nada), 1000)

    }
  return (
    <div>
        <img src={cara} alt="" style={{width:"200px"}} onClick={handleDice}/>
    </div>
  )
}

export default Dice