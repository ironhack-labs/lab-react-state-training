
import { useState } from "react";

function Counter () {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={ () => {
                counter && setCounter(counter - 1)
            }} > - </button>
                { counter }
            <button onClick={ () => {
                setCounter(counter + 1)
            }}
            > + </button>
        </div>
    );
}

export default Counter;