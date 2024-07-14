import React, { useState } from 'react'

function Counter() {

    const [ counter, setCounter ] = useState(0)
    const increment = () => setCounter((prevCount) => prevCount +1) 
    const decrement = () => setCounter((prevCount) => prevCount > 0 ? prevCount -1 : 0)

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
