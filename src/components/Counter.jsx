import { useState } from "react";

export default function Counter () {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter +1);
    };

    const decreaseCounter = () => {
        if(counter > 0){
            setCounter(counter -1);
        }
    };


    return (
        <div>
            <p> {counter} </p>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </div>
    )
};