import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <p>Iteration 2 - Counter</p>
            <div className="buttons">
                <button className="plus-button" onClick={() => setCount(count + 1)}>
                    ➕
                </button>
                {count}
                <button className="minus-button" onClick={() => setCount(count - 1)}>
                    ➖
                </button>
            </div>
        </div>
    );
}

export default Counter;