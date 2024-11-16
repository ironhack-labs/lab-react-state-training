import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);

    const handleCountUp = () => {
        setCount(count +1);
    }

    const handleCountDown = () => {
        if(count > 0) setCount(count - 1);
    }

    return (
        <div className="d-flex gap-4 align-items-center border p-5 justify-content-center">
            <button className="btn btn-sm btn-primary" onClick={handleCountDown} >-</button>
            <p className="fs-3 fw-bold mb-0">{count}</p>
            <button className="btn btn-sm btn-primary" onClick={handleCountUp}>+</button>
        </div>
    )
}

export default Counter;