import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <button onClick={increase}> +</button>
      <p>{counter}</p>
      <button onClick={decrease}>- </button>
    </>
  )
}
export default Counter
