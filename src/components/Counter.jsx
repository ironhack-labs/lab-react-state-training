import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleCounter = (event) => {
        
        if (event.target.innerText === "+") {
            setCount(count + 1);
            event.target.disabled = false;
        }
        else if (count > 0) setCount(count -1);
    }

    return(
        <div id="counter" className="row">
            <button onClick={handleCounter}>-</button>
            <p>{count}</p>
            <button onClick={handleCounter}>+</button>
        </div>
    );
}

export default Counter;