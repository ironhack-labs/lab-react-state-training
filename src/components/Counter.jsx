import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);
    function increaseCounter(){
    setCounter(counter + 1)
    }

    function decreaseCounter(){
    {counter > 0 && setCounter(counter - 1)};
    }
    return(
        <div className="counter-div">
        <button className="btn" onClick={decreaseCounter}>-</button>
        <span>{counter}</span>
        <button className="btn" onClick={increaseCounter}>+</button>   
        </div>
    )
}

export default Counter