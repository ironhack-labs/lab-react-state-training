import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const handleIncreaseCounter = () => setCounter(counter + 1)
    const handleDecreaseCounter = () => setCounter(counter - 1)
  return (
    <div>
        <button onClick={handleDecreaseCounter}> - </button>
        <span> {counter} </span>
        <button onClick={handleIncreaseCounter}> + </button>
    </div>
  )
}

export default Counter