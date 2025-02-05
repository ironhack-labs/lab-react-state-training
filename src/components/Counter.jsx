import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState (0);

    return (
        <div>
            <button onClick={() =>setCount (Math.max(0, count -1))}>
            -</button>
            <span>{count}</span>
            <button onClick={() =>setCount (count +1)}>
            +</button>
        </div>
    )
}