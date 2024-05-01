import { useState } from "react";
import "./Counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter-container">
            <button className="button-counter" onClick={() => counter > 0 && setCounter(counter - 1)}>-</button>
            <p>{counter}</p>
            <button className="button-counter" onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    ) 
};

export default Counter;