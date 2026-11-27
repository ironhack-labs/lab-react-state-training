import {useState} from "react";
import './counter.css'

function Counter(){
    const [count,setCount] = useState(0);

    const restFunction = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div className = "counter-container">
            <button className = "restButton" onClick = {restFunction}>-</button>
            <p>{count}</p>
            <button className = "addButton" onClick = {()=>{setCount(count + 1)}}>+</button>
        </div>
    )
}

export default Counter