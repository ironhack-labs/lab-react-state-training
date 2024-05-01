import { useState } from "react"
import './Counter.css'

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
            <h1>Counter</h1>
            <button onClick={decrementCounter}> - </button>
            <p>{counter}</p>
            <button onClick={incrementCounter}> + </button>
        </div>
    )
}

export default Counter