import { useState } from "react";

function Counter(){
    const [counter,SetCounter] = useState(0)
    const addCounter = () => {
        SetCounter(counter + 1)
    }
    const minusCounter = () => {
        if(counter > 0){
            SetCounter(counter - 1)
        }
    }

    return (
        <div className="box">
           <div className="button">
            <button className = "button1"onClick={minusCounter}>-</button>
            <h1>{counter}</h1>
            <button className= "button1"onClick={addCounter}>+</button>
           </div>
        </div>
    )
}

export default Counter