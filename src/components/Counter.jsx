import { useState } from "react"

export function Counter() {
    const [count,setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if(count >0){
            setCount(count - 1)
        }
    }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
}