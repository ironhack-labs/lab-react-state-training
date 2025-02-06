import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = (buttonCliked) => count + (buttonCliked);
    return (
        <div className="counter-container">
            <button onClick={() => count > 0 && setCount(handleCount(-1))}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(handleCount(1))}>+</button>
        </div>
    );
}