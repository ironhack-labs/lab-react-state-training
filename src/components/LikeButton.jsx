
import { useState } from "react";



function LikeButton() {
    const [num,setNum] = useState(0);
    const changeNum = (int) => {
        setNum(num + int);
    }


    return (
        <div>
        <button onClick={() => changeNum(1)}>{num}</button>
        </div>
    )
}

export default LikeButton;