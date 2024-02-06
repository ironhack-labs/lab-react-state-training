import { useState } from "react";

function Counter () {

    const [counter, setCounter] = useState(0) 

    function increaseCounter () {
        setCounter (counter + 1)
    }
    function decreaseCounter () {
        if (counter > 0) {
            setCounter (counter -1)
        }
    }

    return (
        <div className="Counter">
            <button onClick={decreaseCounter}>-</button>
            <p>{counter}</p>
            <button onClick={increaseCounter}>+</button>
        </div>
    )
}

export default Counter;