import { useState } from "react";
function Counter() {
const  [counter, setCounter] = useState(0);
    if(counter >= 0){
        return (
            <div>
    <button onClick={()=>setCounter(counter -1)}>-</button>
    <div>{counter}</div>
    <button onClick={()=>setCounter(counter +1)}>+</button>
</div>
)
} else {
    return (
    <div>
    <button>-</button>
    <div>{counter = 0}</div>
    <button>+</button>
    </div>)
}
}
export default Counter
