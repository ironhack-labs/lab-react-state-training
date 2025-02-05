import { useState } from "react";
import "./Counter.css"
function Counter(){
const[counter,setCounter]=useState(0);
const counterset=(diff) => {
    const newvalue=counter+diff;
    if (newvalue >= 0) {
        setCounter(newvalue);
      }
   
}
    return(
        <div className="Counter">
            <div className="buttonalign">
            <button onClick={()=>{counterset(-1)}}>-</button>
            <div >{counter}</div>
            <button onClick={()=>{counterset(1)}}>+</button>
            </div>

        </div>
    )

}
export default Counter;