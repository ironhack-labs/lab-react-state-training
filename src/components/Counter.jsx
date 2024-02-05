import {useState} from 'react';

function Counter () {

    const [num, updateNum] = useState(0);

    return(
        <>
            <button onClick={() => {if (num > 0) updateNum(num - 1)}}>-</button>
            <p>{num}</p>
            <button onClick={() => updateNum(num + 1)}>+</button>
        </>
    )

}

export default Counter;