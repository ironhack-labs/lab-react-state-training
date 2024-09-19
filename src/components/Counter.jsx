import React, { useState } from 'react'
import "./styleCounter.css"

export default function Counter() {

  const [counter, setCounter] = useState(0)

  const handleIncrease = () => {
    setCounter(counter+1)
  }

  const handleDecrease = () => {
    setCounter(counter-1)
  }

  return (
    <div className='counter'>
      <div className='buttons'>
      <button onClick={handleIncrease} className='increase'>+</button>
      <p>{counter}</p>
      <button onClick={handleDecrease} className='decrease'>-</button>
      </div>
      
    </div>
  )
}
