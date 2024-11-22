import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0)
    
    const handleMinus = () => setCount(count-1);
    const handlePlus = () => setCount(count+1);
    return(
        <div className="mt-4">
        <button className={`btn btn-primary me-2 ${count > 0 ? "" : "disabled"}`}  onClick={handleMinus} type="button">-</button>
        <span className="me-2 fs-1">{count}</span>
        <button className="btn btn-primary me-2" onClick={handlePlus} type="button">+</button>
        </div>
    );
}

export default Counter;