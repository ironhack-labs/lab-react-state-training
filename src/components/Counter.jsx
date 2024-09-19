import React from 'react'
import { useState } from 'react'

function Counter() {

    const[counter, setCounter] = useState(0)
    const increase =() =>{setCounter(counter +1) }
    const decrease = () =>{ if(counter > 0) {setCounter(counter -1) }}
  return (
    <div className='counter-box'>
      <button className='counter-button' onClick={decrease}>-</button>
      <p>{counter}</p>
      <button className='counter-button' onClick={increase}>+</button>
    </div>
  )
}

export default Counter
