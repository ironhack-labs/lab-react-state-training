import { useState } from "react";
 
function Counter() {
  const [count, setCount] = useState(0)

  const handleCounterPlus = () => {
    setCount(count + 1)
  }

  const handleCounterMinus = () => {
    setCount(count - 1)
  }
 
  return (
    <>
    <button onClick={handleCounterPlus}>+</button>
    <span>{count}</span>
    <button onClick={handleCounterMinus}>-</button>
    </>
  )
}
 
export default Counter;