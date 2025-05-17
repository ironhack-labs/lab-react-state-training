import { useState } from "react";

function Counter () {
    const [CounterState, setIncrementCounterState] = useState(0);

    function handleIncrementCounter () {
        setIncrementCounterState(CounterState + 1);
    }

    function handleDecrementCounter () {
        if (CounterState > 0) {
            setIncrementCounterState(CounterState - 1);
        }
        
    }
    return (
        <>
         <h3>Iteration 2</h3>
        <div style={{border: "1px solid blue", display: "inline-block"}}>
            <button onClick={handleIncrementCounter} style={{margin: "5px"}}> + </button> 
            {CounterState}
            <button onClick={handleDecrementCounter} style={{margin: "5px"}}> - </button>
        </div>
        </>
    )
}

export default Counter;