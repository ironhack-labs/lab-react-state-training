import { useState } from "react"

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0)

  const plus = () => {
    setCounterValue( prev => prev+= 1)
  }

  const minus = () => {
    if (counterValue > 0 ) {
    setCounterValue( prev => prev-= 1) }
  }

  return (
    <div style={{display:"flex"}}>
      <button onClick={minus}>-</button>
      <div>Count: {counterValue}</div>
      <button onClick={plus}>+</button>

    </div>

  )
}