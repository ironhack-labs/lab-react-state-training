import { useState } from "react"

function Counter() {
    const [number, setNumber] = useState(0);

    function handleClick(e) {

        if (e.target.className === "minus-btn") {
            setNumber(number => Math.max(0, number - 1));
            if (number === 0) {
                setNumber(0);
            }
        } else if (e.target.className === "plus-btn") {
            setNumber(number => number + 1)
        }

    }

    return (
        <div>
            <button className="minus-btn" onClick={handleClick}>-</button>
            <span>{number}</span>
            <button className="plus-btn" onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter