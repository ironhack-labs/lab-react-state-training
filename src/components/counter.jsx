import { useState } from 'react'

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
            {counterValue}
            <button onClick={handleDecrementCounter}>-</button>
            <button onClick={handleIncrementCounter}>+</button>
        </div>
    )

}

export default Counter