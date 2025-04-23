import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    };
    const decreaseCounter = () => {
        setCounter(counter - 1);
    };
    return (
        <div key={counter}>
            <button onClick={decreaseCounter}>-</button>
            <span>{counter}</span>
            <button onClick={increaseCounter}>+</button>
        </div>
    );
}
export default Counter;