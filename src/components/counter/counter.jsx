import Panel from "../ui/panel/panel";
import { useState } from "react";

function Counter({ initialCountValue = 0, min = 0 }) {
    const [count, setCount] = useState(() => {
        let initialValue = initialCountValue;
        if (min !== undefined) {
            initialValue = Math.max(min, initialValue);
        } 
        return initialValue;
    });  

    const handleCountUp = () => setCount(count + 1);
    const handleCountDown = () => {
        if (min === undefined || count > min) {
            setCount(count - 1);
        }
    };

    return (
        <Panel className="d-flex gap-2 align-items-center justify-content-center border"> 
            <button className={`btn btn-primary btn-sm`} onClick={handleCountDown} >-</button>
            <p className='m-0 p-3 fs-3 text-center'>{count}</p>
            <button className={`btn btn-primary btn-sm`} onClick={handleCountUp} >+</button>
        </Panel>
    )
}

export default Counter;