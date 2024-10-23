import React, { useState } from "react";


function Counter(){

const [counter, setCounter] = useState(0)

const increment = () => {
    return setCounter(counter + 1);
}

const decrement = () => {
    if(counter > 0){
        return setCounter(counter - 1);
    }
       
}

return (

    
    <section>
        <button onClick={increment}>+</button>
        <p>{counter}</p>
        <button onClick={decrement}>-</button>
    </section>
    
    
)

}

export default Counter;