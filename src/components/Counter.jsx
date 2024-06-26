import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);
const increment = () => {
    setCounter(counter+1);
}
const decrement = () => {
    setCounter(counter-1);
}
    return <>
<button type="button" onClick={increment}>+</button>
<div>{counter}</div>
{counter === 0 
? <button type="button">-</button>
: <button type="button" onClick={decrement}>-</button>}
    </>
}

export default Counter;