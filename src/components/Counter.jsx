import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(Math.max(0, count - 1));

    return (
        <div style={{display: 'flex'}}>
            <button disabled={count == 0} onClick={() => decrement()}>-</button>
            <p>{count}</p>
            <button onClick={() => increment()}>+</button>
        </div>
    );
}

export default Counter;
