import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div>
                <p>Counter Value: {counter}</p>
                <kbd className="increase" onClick={increaseCounter}>+</kbd>
                <kbd className="decrease" onClick={decreaseCounter}>-</kbd>
            </div>
        </>
    )
}

export default Counter;
