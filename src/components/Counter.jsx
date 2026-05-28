import { useState } from "react";

function Counter() {
    
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count -1);
        }
    };

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={increaseCount}>+</button>

            <button onClick={decreaseCount}>-</button>
        </div>
    );
}

export default Counter;