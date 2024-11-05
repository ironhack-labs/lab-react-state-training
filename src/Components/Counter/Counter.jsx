import { useState } from "react";
import "./Counter.css"
const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const handleIncrementValue = () => {
        setCounterValue(counterValue + 1)
    }
    const handleDecrementtValue = () => {
        setCounterValue(counterValue - 1)
    }

    return (
        <div className="Counter">
            <h1>COUNTER</h1>
            <div className="Buttons">
                <svg onClick={handleIncrementValue} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
                <h2>{counterValue}</h2>
                <svg onClick={handleDecrementtValue} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                </svg>
            </div>
        </div>
    )
}

export default Counter