import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const countUp = () => {
        setCounter(counter + 1);
    }

    const countDown = () => {
        if (counter > 0 ) {
        setCounter(counter - 1);
        }
    }

    return ( 
    <div>
        <button onClick={() => {countDown()}}>-</button>
        <span> {counter} </span>
        <button onClick={() => {countUp()}}>+</button>
    </div>
    )
}

export default Counter;