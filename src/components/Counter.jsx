import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handlePlus() {
        setCount(count + 1);
    }

    function handleMinus() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
        </div>
    );
}

export default Counter;