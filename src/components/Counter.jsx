import { useState } from "react"
import "../components/Counter.css"

function Counter() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count -1);
  }

  return (
    <div className="counter-container">
      <button onClick={decrease} className="plus">-</button>
      <h3> {count} </h3>
      <button onClick= {increment} className="minus">+</button>
    </div>
  )
};

export default Counter