import { useState } from "react";

function Counter () {
    const [counter, setCounter] = useState(0);

    return (
        <>
    <button onClick={ () =>
        setCounter(counter + 1)
    }> + </button>
    <h2>{counter}</h2>
    <button onClick={ () =>
        setCounter(counter - 1)
    }> - </button>
</>
)
}

export default Counter;