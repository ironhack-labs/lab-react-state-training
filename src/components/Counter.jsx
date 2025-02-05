import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="Counter">{ count > 0 ? <button className="counterButton" onClick={() => setCount(count - 1)}> - </button>: <button className="counterButton"> - </button> }        
            {count}
            <button className="counterButton" onClick={() => setCount(count + 1)}> + </button>
        </div>        
    );
}