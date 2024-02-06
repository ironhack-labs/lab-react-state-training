import { useState } from "react";

function Counter () {

    const [counter, setCounter] = useState(0);

    return (
        <div className="counter-div">
            <button className="counter-buttons" onClick={ () => setCounter(counter + 1)}>+</button>
            <h2>{counter}</h2>
            <button className="counter-buttons" onClick={ () => counter > 0 ? setCounter(counter - 1) : setCounter(0)}>-</button>
        </div>

    )
}

export default Counter;