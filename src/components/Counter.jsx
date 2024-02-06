import React from 'react';
import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <div id="counter">
            <section>
                <button onClick={decreaseCounter}>-</button>
                <p>{counter}</p>
                <button onClick={increaseCounter}>+</button>
            </section>
        </div>
    )
}

export default Counter;