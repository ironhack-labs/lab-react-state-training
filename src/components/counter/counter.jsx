import { useState } from "react";
import "./counter.css"

function Counter () {

    const [count, setCount] = useState(0);

    function increaseCounter () {
        setCount(count + 1)
    }

    function decreaseCounter () {
        if (count > 0) {
            setCount(count - 1)
        }
        
    }

    return (
        <div className="counter">
            <button className="button2" onClick={decreaseCounter}> - </button>
            <p> {count} </p>
            <button className="button1" onClick={increaseCounter}> + </button>
        </div>
    )
}

export default Counter