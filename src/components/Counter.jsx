import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
    const addCounter = () => {
        setCounter(counter + 1)
    } 
        const minusCounter = () => {
            if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
        <div className="box" >
            <div className="buttons"> 
            <button className="test" onClick={addCounter}>+</button>
            <h2>{counter}</h2>
            <button className="test"onClick={minusCounter}>-</button>
            </div>
        </div>
        
        </>
    )
}

    export default Counter;
