import { useState } from "react"
import dado0 from "../assets/images/dice0.png"
import dado1 from "../assets/images/dice1.png"
import dado2 from "../assets/images/dice2.png"
import dado3 from "../assets/images/dice3.png"
import dado4 from "../assets/images/dice4.png"
import dado5 from "../assets/images/dice5.png"
import dado6 from "../assets/images/dice6.png"

const images = [dado0, dado1, dado2, dado3, dado4, dado5, dado6];

function Dice() {

    const [dadoAleatorio, aleatoriedad] = useState(0)


    const hundleDice = () =>{
        aleatoriedad(Math.floor(Math.random() * 6) + 1)

    }
    
  return (



    <div>

<img onClick={hundleDice} src={images[dadoAleatorio]} alt="dado"  />

    </div>
  )
}

export default Dice