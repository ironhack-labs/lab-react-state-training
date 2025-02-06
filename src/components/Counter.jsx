import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    const sumCount = () => setCount((prevCount) => prevCount + 1)
    const restCount = () => setCount((prevCount) => prevCount - 1)

    return (
        <div className="counter-container">
            <button onClick={count > 0 && restCount} >-</button>
            <p>{count}</p>
            <button onClick={sumCount}>+</button>
        </div>
    )
}

export default Counter;