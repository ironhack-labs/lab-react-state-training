import { useState } from "react"
import emptyDice from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

const dice = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  const [number, setNumber] = useState(getRandomNumber())

  const handleSetNumber = () => {
    setNumber(0);
    setTimeout(() => setNumber(getRandomNumber()), 1000);
  }

  return (
    <div>
      <img 
        src={dice[number]} 
        alt="Dice" 
        role="button" 
        className="img-thumbnail d-flex p-3 w-25"
        onClick={handleSetNumber}
      />
    </div>
  );
}
export default Dice;