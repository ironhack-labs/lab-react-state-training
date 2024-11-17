import {useState} from "react";
import Panel from "../ui/panel/panel";

function Counter ({className='', initialCountValue = 0, min, max }) {
    const [count, setCount] = useState(() => {
        let initialValue = initialCountValue;
        if (min!== undefined) {
            initialValue = Math.max(min, initialValue);
        }
        if (max !== undefined) {
            initialValue = Math.min(min, initialCountValue);
        }
        return initialValue;
    });

    const handleCountUp = () => {
        if (max === undefined || count <max) {
            setCount(count + 1);
        }
    }

    const handleCountDown = () => {
        if (min === undefined || count > min) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <Panel className={`d-flex flex-row align-items-center justify-content-center gap-2`}>
            <button className= "btn p-3 btn-primary btn-sm d-flex align-items-center justify-content-center gap 2" onClick={handleCountDown} disabled={count === min} >-</button>
            <p className={`m-0 p-3 fs-2 fw-lighter text-center`}>{count}</p>
            <button className= "btn p-3 btn-primary btn-sm d-flex align-items-center justify-content-center gap 2" onClick={handleCountUp} disabled={count === max}>+</button>
            </Panel>
        </>
    )
}
export default Counter;