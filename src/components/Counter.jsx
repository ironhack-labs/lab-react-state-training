import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <button onClick={() => (counter <1 ? setCounter(0) : setCounter(counter -1))}>-</button>
    <p>{counter}</p>
    <button onClick={()=> setCounter(counter + 1)}>+</button>
    </>
  )
}

export default Counter