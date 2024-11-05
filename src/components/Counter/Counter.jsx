import './../Counter/Counter.css'
import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(prev => prev += 1);
    }

    function decrement() {
        setCounter(prev => {
            prev = (prev > 0) ? (prev - 1) : 0;
            return prev;
        });
    }

    return (
        <div className="Counter">
            <button className="squareButton" onClick={decrement}>-</button>
            <h2>{counter}</h2>
            <button className="squareButton" onClick={increment}>+</button>
        </div>
    )
}

export default Counter