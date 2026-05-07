import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div style={{ border: "2px solid blue", padding: "10px", width: "150p", display: "flex", alignitens: "center", justifyContent: "space-around"}}>
            <button onClick={() => count > 0 && setCount(count - 1)}> - </button>
            <span> {count} </span>
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    );
}

export default Counter;
   