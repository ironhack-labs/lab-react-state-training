import { useState } from "react";
export function Counter() {

  const [count, setCount] = useState(0);
  const IncrementCount = () => {
    setCount(count+1)
  }
  const DecrementCount = () => {
    {count > 0 ? setCount(count-1) : count === 0}
  }
  return (
    <>
      <button className="CountButton" onClick={DecrementCount}>-</button>
      {count}
      <button className="CountButton"  onClick={IncrementCount}>+</button>
    </>
  )
}