import {useState} from 'react';

function Counter () {

    const [num, updateNum] = useState(0);

    const clickHandler = (x) => {

        const minus = document.getElementById("minus");

        updateNum(num + x);
        
        if (num === 0) {
            minus.disabled = true;
        } else {
            minus.disabled = false;
        }

    }

    return(
        <>
            <button id="minus" onClick={() => {clickHandler(-1);}}>-</button>
            <p>{num}</p>
            <button id="plus" onClick={() => {clickHandler(1);}}>+</button>
        </>
    )

}

export default Counter;