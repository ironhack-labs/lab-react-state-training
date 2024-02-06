import { useState } from "react";

function Counter() {

    const [counter, updateCounter] = useState(0)

    function increaseCounter() {
        updateCounter(counter + 1)
    }
    function decreaseCounter() {
        if (counter > 0) {
            updateCounter(counter - 1)
        }
    }

    return (
        <div className="Counter">
            <button className="counter-btn" onClick={decreaseCounter}>-</button>
            <p>{counter}</p>
            <button className="counter-btn" onClick={increaseCounter}>+</button>
        </div>
    )
}

export default Counter;