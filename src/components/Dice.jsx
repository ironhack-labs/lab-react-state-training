
import { useState } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {

    const [diceValue, setDiceValue] = useState(null)
    const [showEmpty, setShowEmpty] = useState(false)
    const diceImages = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
      ]
      const rollDice = () => {
        
        setShowEmpty(true);
    
        setTimeout(() => {
          
          const randomIndex = Math.floor(Math.random() * 6);
          setDiceValue(diceImages[randomIndex]);
         
          setShowEmpty(false);
        }, 1000);
    };

    return (
        <div>
        <img className="diceImg"
          src={showEmpty ? diceEmpty : diceValue}
          alt="diceeee"
          onClick={rollDice}
        />
      </div>
    
    )
}
export default Dice