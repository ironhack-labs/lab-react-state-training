import { useState } from "react"
import "../App.css"

function Counter () {
  const [number, setNumber] = useState(0)

  const incrementNumber = () => {
    setNumber(number + 1)
  }

  const decrementNumber = () => {
    setNumber(Math.max(number -1, 0))
  }

  return(
    <div className="Counter">
      <button onClick={decrementNumber} disabled={number === 0}>-</button>
      <span>{number}</span>
      <button onClick={incrementNumber}>+</button>
    </div>
  )
}

export default Counter