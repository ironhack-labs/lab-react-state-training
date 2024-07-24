import { useState } from 'react'
import "./Counter.css"

function Counter(){
    const [counter,setCounter] = useState(0);
    return(
        <>
        <div className="counter">
        <button onClick={()=>setCounter(counter>0? counter-1 : counter)}> - </button>
        <span > {counter}</span>
        <button onClick={()=>setCounter(counter+1)}> + </button>
        </div>
        </>
    )
}

export default Counter;