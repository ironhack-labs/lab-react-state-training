import React, { useState } from 'react'

const Dice = () => {
    const [diceValue, setDiceValue] = useState("empty")

    function handleClick(){
        setDiceValue('empty');
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
    }, 1000);
    }
  return (
    <div>
        <img src={`src/assets/images/dice${diceValue === "empty" ? "-empty" : diceValue}.png`} alt="dice" onClick={handleClick} className='dice'/>

    </div>
  )
}

export default Dice