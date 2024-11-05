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
        <div className='Counter'>

            <h2> {counterValue}</h2>

            <button onClick={handleIncrementCounter}>+</button>
            <button onClick={handleDecrementCounter} disabled={counterValue === 0}>-</button>

        </div>
    )
}
export default Counter