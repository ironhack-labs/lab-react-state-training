import { useState } from "react";

function Counter (){
    const [count, setCount] = useState(0);
    return (
        
        <div>
        <button onClick={() => setCount(count + 1)} >+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
        </div>
    );
}

export default Counter