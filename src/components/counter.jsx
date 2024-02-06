import { useState } from "react";
import '../App.css'

function Counter(){
    let [count, setCount] = useState(0);
    function updateCount(operator){
        if(operator === "+")
        setCount(count + 1);
    else
    {
        if(count >0)
    setCount(count-1);}
    }
return(<div>
<button className="opBtn" onClick={() =>{updateCount("+")}}>+</button>
<span>{count}</span>
<button className="opBtn" onClick={() => {updateCount("-")}}>-</button></div>)
}
export default Counter;