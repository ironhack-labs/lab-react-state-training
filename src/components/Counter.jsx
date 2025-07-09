import React, { useState } from 'react';


export default function Counter({className}) {
    const [counter, setCount] = useState(0);

    const plusCounts = () => {
        setCount(counter + 1);
    };

     const minusCounts = () => {
        setCount(counter - 1);
    };


    return (
        <div className= {className}>
            <button onClick={plusCounts}>+</button>
            <p>{counter}</p>
            <button onClick={minusCounts}>-</button>
        </div>
    );
}


