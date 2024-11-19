import { useState } from "react";

function Counter () {
    const [count, setCounter] = useState(0)
    return (
        <>
        <h3>{count}</h3>
            <button onClick={() => setCounter(count + 1)}>+</button>
            <button onClick={() => count > 0 && setCounter(count - 1)}>-</button>
        </>
    )
}

export default Counter; 