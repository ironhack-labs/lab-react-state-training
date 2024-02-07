import { useState } from 'react';

function Counter () {
    let [count, setCount] = useState(0);
    return (
    <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>-</button>
    </div>
    )
}

export default Counter;