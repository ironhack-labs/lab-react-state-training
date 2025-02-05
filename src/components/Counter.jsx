import { useState } from "react"


function Counter (){

    const [counter, setCounter] = useState(0)

    const likeCounter = (diff) => {
        setCounter((prev) => Math.max(0, prev + diff));
    };

    return (
        <div>
        <button onClick={() => likeCounter(1)}>+</button>
        {counter}
        <button onClick={() => likeCounter(-1)}>-</button>
        </div>
    )

}

export default Counter