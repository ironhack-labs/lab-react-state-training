import { useState } from "react"

function Counter() {

  const [ counter, setCounter ] = useState(0)

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="counter">
      <button onClick={handleDecrease}>-</button>
      <h3>{counter}</h3>
      <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter