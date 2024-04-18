import "./Counter.css";
import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    
    return (
        <div className="counter">
            <button className="counter-dec-btn" onClick={() => setCount(Math.max(0, count - 1))}>-</button>
            <span className="counter-display">{count}</span>
            <button className="counter-inc-btn"onClick={() => setCount(count + 1)}>+</button>
        </div>
    ); 
};

export default Counter;