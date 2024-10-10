import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const incrementCountByOne = () => {
        setCount((prevCount) => Math.max(++prevCount,0))   
    }
    const decrementCountByOne = () => {
        setCount((prevCount) => Math.max(--prevCount,0))   
       }
    return (
        <div className="counter">
            <button onClick={() => decrementCountByOne()}>-</button>
            <span>{count}</span>
            <button onClick={() => incrementCountByOne()}>+</button>
        </div>
    )
}

export default Counter;