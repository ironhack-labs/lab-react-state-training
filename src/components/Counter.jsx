import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleAddCount = () => {
    setCount(count + 1)
  }
  const handleSubstratCount = () => {
    setCount(count > 0 ? count - 1 : 0)
  }
  return (
    <span className="Counter">
      <button onClick={handleSubstratCount}>-</button>
      <span>{count}</span>
      <button onClick={handleAddCount}>+</button>
    </span>
  )
}

export default Counter