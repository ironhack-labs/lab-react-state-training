import { useState } from 'react';

function Likebutton () {
    let [count, setCount] = useState(() => 0);
    let [count1, setCount1] = useState(() => 0);
    return (
    <div>
        <div>
            <button onClick={()=>setCount((prevCount) => prevCount + 1)}>{count} Likes</button>
            <button onClick={()=>setCount1((prevCount1) => prevCount1 + 1)}>{count1} Likes</button>
        </div>
    </div>
    )
}

export default Likebutton