import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    //increment
    const increase = () => {
        setCounter(counter + 1)
    }

    //decrement
    const decrease = () => {
        setCounter(counter - 1)
    }


    return (
        <div>
            <p>
                <button onClick={() => decrease()}> -</button> {counter}
                <button onClick={() => increase()}> +</button>
            </p>
        </div>
    )
}

export default Counter