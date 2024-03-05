
import React, { useState } from 'react';

const Counter = () => {

    const [digit, setDigit] = useState(0)

    const plusDigit = () => {

        setDigit( digit + 1)

    }

    const restDigit = () => {
        if (digit > 0) {
            setDigit(digit - 1)
        }
    }

    return (
        <div className='counter'>
    <button className='increment' onClick={plusDigit}>+</button>
    <p className='digit'>{digit}</p>
    <button className='decrement' onClick={restDigit}>-</button>
        </div>
    
    )
}

export default Counter