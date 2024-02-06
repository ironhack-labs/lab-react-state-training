import { useState } from "react";

function counter () {
    let [count, setCount] = useState(0);

    return(
        <div className="counter-box" >
            <button  className="counter-button" onClick = {() => count>0 ? setCount (count -1) : setCount(0)}>-</button>
            <span>{count}</span>
            <button className="counter-button" onClick={() => setCount (count + 1)}>+</button>
        </div>
    );
}

export default counter;