import { useState } from "react";

const Counter = () => {
    
    const [counter, setCounter] = useState(0); // initially 0

    const updateCounter = (diff) => {
        if(counter + diff >= 0) {
            setCounter(counter + diff) // increase/decrease counter as passed in the diff
            console.log("clicked")
    }
    };

    return (
        <div>
            <button onClick={() => {updateCounter(-1)}}>-</button>
            <span>{counter}</span>
            <button onClick={() => {updateCounter(+1)}}>+</button>
        </div>
    )
}

export default Counter; 