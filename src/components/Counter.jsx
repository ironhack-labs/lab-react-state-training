import { useState } from "react";

function Counter() {

    const [counterValue, setCounterValue] = useState(0);

    return(
        <div style={{ margin: '10px 0px' }}>
            <button onClick={() => {(counterValue > 0) ? setCounterValue(counterValue - 1) : null}}>-</button>
                <span style={{ padding: '0 10px' }}>{counterValue}</span>
            <button onClick={() => setCounterValue(counterValue + 1)}>+</button>
        </div>
    )
}



export default Counter;