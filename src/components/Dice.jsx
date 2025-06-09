import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import diceEmpty from "../assets/images/dice-empty.png" 
import { useState } from "react"

function Dice() {

    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

    //estado inicial
    const [diceValue, setDiceValue] = useState(getRandomValue())
     
         

    //obtengo un numero aleatorio
    function getRandomValue() {
        return Math.floor(Math.random() * 6)
    }

    //inicio el dado vacio
    const handleClick = () => {
        setDiceValue(null)

        //despues de un segundo, se muestra el valor aleatorio
    setTimeout(() => {
        setDiceValue(getRandomValue())
    }, 1000)
    }

    

  return (
    <div>
      <img src={diceValue === null ? diceEmpty : diceImages[diceValue]} 
      alt="dado"
      onClick={handleClick}  style={{width:"100px"}}/>
    </div>
  );
}

export default Dice;
