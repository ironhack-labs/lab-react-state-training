import React, {useState} from 'react'

function Dice() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 6) + 1);
  const [ dice, setDice] = useState(randomNumber);
  return (
        <img
            src={`../assets/images/dice${dice}.png`} 
            onClick={() => setDice(randomNumber)} />
  )
}

export default Dice