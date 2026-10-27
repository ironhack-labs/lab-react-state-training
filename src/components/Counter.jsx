import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)
    function increaseCount(){
        setCount(count + 1)
    }
    function decreaseCount(){
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return(

        <div>
            
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}
export default Counter