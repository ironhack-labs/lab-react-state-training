import React, {useState} from "react";

const Counter = () => {
    const {count, setCount} = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if(count > 0 ) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button onClick={decrementcrement}>-</button>
            <span>Counter:{count}</span>
            <button onClick={incrementcrement}>+</button>
        </div>
    );
};

export default Counter;