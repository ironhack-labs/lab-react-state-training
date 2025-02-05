
import { useState } from "react";

function Counter(){

const [counter, setCounter] = useState(0);

const addOne = () => {
    setCounter(counter + 1)
}

const oneLess = () => {
    counter > 0 && setCounter(counter - 1)
}


return (
    <div>
    <button onClick={oneLess}>-</button>
    <p>{counter}</p>
    <button onClick={addOne}>+</button>
    </div>
)

}

export default Counter