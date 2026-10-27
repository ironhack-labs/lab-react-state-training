import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount (count +1);
    };
    const handleDecrease = () => {
        if (count > 0) {
            setCount (count -1);
        }
    };

return (
    <div>
        <h2>{count}</h2>
        <button onClick ={handleDecrease}>-</button>
        <button onClick = {handleIncrease}>+</button>
    </div>
);
}

export default Counter;