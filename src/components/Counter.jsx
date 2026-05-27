
import { useState } from 'react'

export const Counter = () => {

    const [counterNumber, setCounterNumber] = useState(0)

    const updateCounterNumber = (value) => {
        counterNumber + value >= 0 ? setCounterNumber(counterNumber + value) : 0
    }

    return (
        <div id="counter-component">
            <button onClick={() => updateCounterNumber(+1)}>+</button>
            <span>{counterNumber}</span>
            <button onClick={() => updateCounterNumber(-1)}>-</button>
        </div>
    )
}