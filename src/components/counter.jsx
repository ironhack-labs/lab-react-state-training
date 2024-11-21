import { useState } from "react";

function Counter({className = ""}) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {if (count > 0) {setCount(count - 1)}};
    

    return(
        <div className={`border d-flex gap-3 flex-row align-items-center p-2 justify-content-center ${className}`}>
            <button style={{width: "50px", height: "50px"}} className="btn btn-primary fw-bold" onClick={handleDecrement}>-</button>
            <p className= "m-0 text-center fs-2 fw-">{count}</p>
            <button style={{width: "50px", height: "50px"}} className="btn btn-primary fw-bold" onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;