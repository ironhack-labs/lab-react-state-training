import {useState} from "react"

function Counter() {
    const [count, setCount] = useState(0);


    return (
        <>
        <button onClick={() => count > 0 && setCount((count) => count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        </>
    )
}

export default Counter;