import { useState } from "react"

function Counter() {

  let [counter, letCounter] = useState(0)

  const handleSubstraction = () =>{
    letCounter (counter -1)
  }

  const handleSum = () =>{
    letCounter(counter +1)
  }

  return (
    <div className="counter">
      <button disabled = {counter === 0 ? true:false} onClick={handleSubstraction}>-</button>
      <p>{counter}</p>
      <button onClick={handleSum}>+</button>
    </div>
  )
}

export default Counter