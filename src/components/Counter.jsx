import { useState } from "react";

function Counter() {
    const [num,setNum] = useState(0);
    const changeNum = (int) => {
        if(num + int > 0)
        setNum(num + int);
    }


    return (
        <div>
        <button onClick={() => changeNum(-1)}></button>
        <div>{num}</div>
        <button onClick={() => changeNum(1)}></button>
        </div>
    )

}
export default Counter;