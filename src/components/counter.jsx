
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="d-flex border border-primary mt-3 ms- p-3" style={{width: '200px'}}>
            <button style={{width: '50px',  height: '50px', backgroundColor: '#006efd'}} onClick={() => {setCount(count => count + 1)}}>➕</button>
            <div className="align-content-center ms-4 me-4 fs-3 fw-semibold">{count}</div>
            <button  className="fw-bold" style={{width: '50px', height: '50px', backgroundColor: '#006efd'}} onClick={() => {setCount(count => count - 1)}}>➖</button>
        </div>
    );
}

export default Counter;