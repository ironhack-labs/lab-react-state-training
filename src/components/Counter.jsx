import { useState } from 'react';

function Counter (props) {

    const[count3, setCount3] = useState(0);

    return (
        <span class= "buttonBox">
            <button class="blueButton" onClick={() => count3>0? setCount3(count3 - 1) : setCount3(0)}>-</button>
            <span>
                {count3}
            </span>
            <button class="blueButton" onClick={() =>  setCount3(count3 + 1) }>+</button>
        </span>
    )

}

export default Counter