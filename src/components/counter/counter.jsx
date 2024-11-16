import { useState } from "react";

function Counter({ className="", min=0 }) {
    const [count, setCount] = useState(min);

    const handleCountUp= () => {
        setCount(count +1);
    }

    const handleCountDown= () => {
        if ( min === undefined || count > min ) setCount(count - 1);
    }


    return(
        <div className={`d-flex align-items-center justify-content-center gap-3 border border-primary-subtle px-4 py-2 ${className}`}>
            <button className={`btn btn-primary btn-sm rounded-0`} onClick={handleCountDown}> - </button>
            <p className="m-0 fs-2 text-center">{count}</p>
            <button className={`btn btn-primary btn-sm rounded-0`} onClick={handleCountUp}> + </button>     
        </div>
    )
}

export default Counter;