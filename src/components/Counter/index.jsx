import './Counter.css'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const countSubtractHandler = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const countPlusHandler = () => {
    setCount(count + 1)
  }
  return (
    <div className='counter-container'>
      <button onClick={() => countSubtractHandler()} className='btn'>-</button>
      <span>{count}</span>
      <button onClick={() => countPlusHandler()} className='btn'>+</button>
    </div>
  )
}

export default Counter