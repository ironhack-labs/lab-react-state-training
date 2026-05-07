import { useState } from 'react'


function Counter(){

    const [num, setNum] = useState(0);



    return(
        <div>
            <button type='button' onClick={() => num === 0 ?  setNum(0) : setNum(num - 1) }>-</button>
            <input readOnly value={num}/>
            <button tyoe='button' onClick={() => setNum(num + 1)}>+</button>
        </div>
    );
}

export default Counter