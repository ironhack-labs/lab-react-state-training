import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);

    const increaseCounter = ( )=> {
        setCounter(counter +1);
    }
    const decreaseCounter = ( )=> {
        if(counter <= 0){
            return setCounter(0)
        }
        setCounter(counter -1);
    }
    
    return(
        <div>
        <button onClick={increaseCounter}>+</button> <p>{counter} </p> <button onClick={decreaseCounter}>-</button>
        </div>
    )
}

export default Counter;