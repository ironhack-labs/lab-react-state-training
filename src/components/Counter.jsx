import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: "2px solid blue", margin: "20px", padding: "10px", display: "inline-block" }}>
            <button onClick={() => {if (count > 0) setCount(count - 1) }}>-</button>
            
            <span style={{ margin: "0 20px", fontSize: "24px" }}>{count}</span>

            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    );
}

export default Counter;