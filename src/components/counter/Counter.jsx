import { useState } from "react";
const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const handleIncrementValue = () => {
        setCounterValue(counterValue + 1)
    }
    const handleDecrementValue = () => {
        setCounterValue(counterValue - 1)
    }
    return (
        <div className="Counter">
            <div className="Buttons">
                <button onClick={handleIncrementValue}>More
                </button>
                <h2>{counterValue}</h2>
                <button onClick={handleDecrementValue}>Minus
                </button>
            </div>
        </div>
    )
}
export default Counter