import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const more = () => {setCount(count + 1)}


    return(
        <div className="ctr">
            <button className="ctrBtn" onClick={more}>+</button>
            <p style={{fontWeight: "bold"}}>{count}</p>
            <button className="ctrBtn" onClick={() => setCount(count > 0 ? count - 1 : count)}> - </button>
        </div>
    )
}
export default Counter

