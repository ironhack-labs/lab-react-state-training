import { useState } from "react";

function Counter (){

    const [counter, setCounter]= useState(0);

    const increase= ()=>{
        setCounter(counter+1)
    }

    const decrease= ()=>{
        if(counter > 0){
            setCounter(counter-1)
        }
    }

    return(
        <>
        <button onClick={increase}>+</button>
        <span>{counter}</span>
        <button onClick={decrease}>-</button>
        </>
    )
}

export default Counter;