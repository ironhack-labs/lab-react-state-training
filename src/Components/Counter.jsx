import React, { useState } from 'react';

function Counter () {

    // Declare a new state variable
    const [count, setCount] = useState(0);

    return(
        <div id='counterDiv'>
            {count > 0 && <button onClick={() => setCount(count -1)}>-</button>}
            <p>{ count }</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    
    
    //<button onClick={() => setCount(count + 1)}>{ count } Likes</button>

    )
}

export default Counter;