import { useState } from "react";

function LikeButton() {

    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        setCounter(counter - 1);
    }


    return (
        <div>
        <button onClick={decreaseCounter}>-</button>
        {counter}
        <button onClick={increaseCounter}>+</button>
        </div>
    );
}

export default LikeButton;