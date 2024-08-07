import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleDecreaseBtn = () => {
        setCount(prevCount => prevCount - 1);
    };

    const handleIncreaseBtn = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
            <button 
                onClick={handleDecreaseBtn}
                disabled={count <= 0} 
            >
                -
            </button>
            <span>{count}</span>
            <button 
                onClick={handleIncreaseBtn}
            >
                +
            </button>
        </>
    );
}

export default Counter;
