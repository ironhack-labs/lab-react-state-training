import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function increaseCount () {
    setCounter(prev => prev + 1)
  }
  function decreaseCount () {
    if(counter === 0) return 0
    setCounter(prev => prev - 1)
  }
  return (
    <div>
      <button onClick={increaseCount}>+</button>
      {counter}
      <button onClick={decreaseCount}>-</button>
    </div> 
  )
}
