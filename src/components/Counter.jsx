import {useState} from 'react';

function Counter(){
    
    const [counter, setCount] = useState(0)

    function updateCounter(increment){
        if (counter + increment >= 0) setCount(counter + increment);
    }
    
    return (
        <div className="counter">
            <button onClick={() => {updateCounter(-1)}}>-</button>

            {counter}
            
            <button onClick={() => {updateCounter(1)}}>+</button>
        </div>
    )
}

export default Counter;