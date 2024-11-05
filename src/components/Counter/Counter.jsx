import { useState } from "react"

import "./Counter.css"

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)

    const handleCounterValueIncrease = () => {
        setCounterValue(counterValue + 1)
    }

    const handleCounterValueDecrease = () => {
        setCounterValue(counterValue - 1)
    }

    return (
        <div className="Counter">
            <button onClick={handleCounterValueDecrease}>-</button>
            <p>{counterValue}</p>
            <button onClick={handleCounterValueIncrease}>+</button>
        </div>
    )
}

export default Counter