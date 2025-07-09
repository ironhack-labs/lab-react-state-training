import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increaseLike = () => {
        setCounter(counter + 1);
    }
    const decreaseLike = () => {
        if (counter !== 0) {
        setCounter(counter - 1);
        }
    }

    return (
        <>
        <button onClick={increaseLike}>+</button>
        <div>{counter}</div>
        <button onClick={decreaseLike}>-</button>

        </>
    )
}

export { Counter };