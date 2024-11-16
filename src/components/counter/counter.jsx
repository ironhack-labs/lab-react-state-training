import Panel from "../panel/panel";
import { useState } from "react"

function Counter({min = 0, className = ''}) {
    const[count, setCount] = useState(0);
    const handleCounterUp = () =>  setCount(count + 1);
    const handleCounterDown = () => {
        if(count > min || min === undefined) {
            setCount(count - 1);
        }
    }
    return(
        <>
            <Panel className='d-flex gap-2 align-items-center justify-content-center'>
                <button className={`btn btn-primary btn-sm`} onClick={handleCounterUp}> + </button>
                    <p className="m-0 fs-2 p-3 text-center">{count}</p>
                <button className={`btn btn-primary btn-sm`} onClick={handleCounterDown}> - </button>             
            </Panel>   
        </>
    )
}
export default Counter;
