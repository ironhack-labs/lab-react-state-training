import { useState } from 'react';
import "./Counter.css";

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className='counter'>
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement} disabled={counter === 0}>-</button>
    </div>
    );
}

export default Counter;
