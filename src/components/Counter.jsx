import { useState } from "react";

function Counter () {
    const [miracle, setCount] = useState(() => 0);
    

    return (
       <div className="btn">
            <button  onClick={() => setCount(miracle + 1)}> + </button>
            <span>{miracle}</span>
            <button onClick={() => miracle > 0 ? setCount (miracle - 1) : setCount(0)}> - </button>
        </div>
    )
}

export default Counter;
