
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button
                onClick={decrement}
                style={{ marginRight: '10px', backgroundColor: 'blue', color: 'white' }}> - </button>



            <span style={{ marginRight: '10px' }}>{count}</span>
            <button
                onClick={increment}
                style={{ backgroundColor: 'blue', color: 'white' }}> +  </button>

        </div>
    );
};

export default Counter;

