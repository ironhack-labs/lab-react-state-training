import { useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const toggleCounter = (num) => {
        if (num === -1 && counter > 0) {
            setCounter(counter - 1);
        } else if (num === 1) {
            setCounter(counter + 1)
        }

    }

    return (
        <div className="counter">
            <button onClick={() => toggleCounter(-1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => toggleCounter(1)}>+</button>
        </div>
    );

}