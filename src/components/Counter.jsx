import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <button onClick={() => { setCount(count + 1) }} style={{ cursor: "pointer"}} >+</button>
            <p>{count}</p>
            <button onClick={() => { setCount(count - 1) }} style={{ cursor: "pointer"}} >-</button>
        </div>
    )
}