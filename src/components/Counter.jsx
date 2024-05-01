import { useState } from "react";
import "./Counter.css";

function Counter() {
  
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        counter > 0 && setCounter(counter - 1);
    };

    return (
        <div className="CounterContainer">
        <button onClick={increaseCounter}>+</button>
        <span>{counter}</span>
        <button onClick={decreaseCounter}>-</button>
        </div>
    )
    
}

export default Counter;