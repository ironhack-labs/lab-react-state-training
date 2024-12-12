import React, {useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const handleClickDecrement = () => {
        return setCount(count - 1);
    }
    const handleClickIncrement = () => {
        return setCount(count + 1);
    }
    return(
        <div>
            <button onClick={count > 0 && handleClickDecrement}>-</button> {count} <button onClick={handleClickIncrement}>+</button> 
        </div>

    )
}
export default Counter;
