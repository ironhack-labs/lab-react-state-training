import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  //   "React, give me the latest value,
  // and I'll calculate the next one.

  // function handleIncrement() {
  //   setCount(prevCount => prevCount + 1)
  // }
  // "If the counter is bigger than zero,
  // decrease it by one.
  // Otherwise, leave it alone."

  // function handleDecrement() {
  //   setCount(prev => (prev > 0 ? prev - 1 : 0))
  // }

  function handleDecrement() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    }
  }

  return (
    <div className="container-buttons">
      <button
        className="button-color"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        +
      </button>
      {count}
      <button className="button-color" onClick={handleDecrement}>
        -
      </button>
    </div>
  )
}

export default Counter
