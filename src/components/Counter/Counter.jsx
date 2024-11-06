import { useState } from "react";

function Counter() {

    const [counterValue, setCounterValue] = useState(0)

    const handleSumClick = () => {
        setCounterValue(counterValue + 1)
    }

    const handleMinClick = () => {
        setCounterValue(counterValue - 1)
    }
    return (
        <div>
            <button onClick={handleSumClick}>+
            </button>
            <span>   {counterValue}</span>
            <button onClick={handleMinClick}>-</button>
        </div>
    )
}

export default Counter