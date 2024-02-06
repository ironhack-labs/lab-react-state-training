import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if(count > 0 ) {
            setCount(count - 1);
        }
    }

    return (
        <div className="counter">
            <button className="counter-button" onClick={() => setCount(count +1)}>+</button>
            <h4>{count}</h4>
            <button className="counter-button" onClick={decrement}>-</button>
        </div>
    );

}

export default Counter;