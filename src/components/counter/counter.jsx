import { useState } from 'react';

import Panel from '../ui/panel/panel';

function Counter({ className = '', min = 0 }) {
    const [count, setCount] = useState(0);
    const handleCountUp = () => {
        setCount(count + 1);
    }
    const handleCountDown = () => {
        if (min === undefined || count > min) {
            setCount(count - 1);
        }
    }


    return (
        <Panel className='d-flex justify-content-center align-items-center gap-2 '>
            <button className='btn btn-primary btn-sm' onClick={handleCountDown}>-</button>
            <p className='p-3 text-center m-0 fs-1'>{count}</p>
            <button className='btn btn-primary btn-sm' onClick={handleCountUp}>+</button>
        </Panel>

    )

}
export default Counter;