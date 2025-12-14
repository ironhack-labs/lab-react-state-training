import React, { useState } from 'react';
function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="d-flex align-items-center gap-2">
            <button className="btn btn-primary" type="button" onClick={() => setCount((count) => count + 1)} > + </button>
            <span className="h4 m-0">
                {count}
            </span>
            <button className="btn btn-primary" type="button" onClick={() => setCount((count) => count - 1)}> - </button>

        </div>
    );
}

export default Counter;