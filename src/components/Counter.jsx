import { useState } from "react";

export function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div className = "buttons">
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}