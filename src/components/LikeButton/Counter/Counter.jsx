import { useState } from "react"
import './../Counter/Counter.css'

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const incrementCounter = () => {
    setCounter(counter + 1)
  }


  return (
    <div className="Counter">
      <h3>Iteration 2</h3>


      <button className='btn-decrement' onClick={decrementCounter}>-</button>

      <p className="counter-number">{counter}</p>

      <button className='btn-increment' onClick={incrementCounter}>+</button>

      <hr />

    </div>
  )
}

export default Counter