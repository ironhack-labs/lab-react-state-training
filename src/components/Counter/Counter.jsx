import { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)

    const handleIncrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const handleDecrementCounter = () => {
        setCounterValue(counterValue - 1)
    }

    return (
        <div className="Counter">

            <button onClick={handleDecrementCounter}>-</button>

            <h2>{counterValue}</h2>

            <button onClick={handleIncrementCounter}>+</button>
        </div>

    )
}

export default Counter