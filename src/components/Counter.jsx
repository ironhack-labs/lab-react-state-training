import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="Counter">
<button className="counterButton" onClick={() => count==0 ? count : setCount(count - 1)}>-</button>
<p>{count}</p>
<button className="counterButton" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter;