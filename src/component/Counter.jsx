import React, { useState } from 'react'

export default function Counter() {
    let [counter , setCounter] = useState(0)
    const incHandle = () => setCounter(counter = counter +1)
    const decHandle = () => setCounter(counter = counter -1)
  return (
    <div style={{display:"flex"}}>
        <button onClick={decHandle}>-</button>
        <div>{counter}</div>
        <button onClick={incHandle}>+</button>
    </div>
  )
}
