import { useState } from "react"

function Counter (){
    const [count, setCounter] = useState(0);

    function increase() {
        setCounter (count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCounter(count - 1);
        }
    }

    return (
        <div>
            <button onClick={decrease}>-</button>

            <span style={{ margin: "0 10px" }}>
                {count}
            </span>

            <button onClick={increase}>+</button>
        </div>
    );
}

export default Counter;