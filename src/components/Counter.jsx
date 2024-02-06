import { useState } from "react";
import "./Counter.css"

export default function Counter() {
    const [counterValue, counterValueSet] = useState(0);

    return(
        <div className="Counter">
            <p>Iteration 2</p>
            <button onClick={() => counterValueSet(counterValue + 1)}>+</button>
            <span>{counterValue}</span>
            <button onClick={() => counterValue > 0 ? counterValueSet(counterValue - 1) : null}>-</button>
        </div>
    )
}