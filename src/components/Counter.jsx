import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <button onClick={handleDecrement} style={{ backgroundColor: "gray", color: "white", padding: "8px 16px"}}>-</button>
            <span style={{fontSize: "400", fontWeight: "200"}}>  {count}  </span>
            <button onClick={handleIncrement} style={{ backgroundColor: "gray", color: "white", padding: "8px 16px"}}>+</button>
        </div>
    );
}

export default Counter;