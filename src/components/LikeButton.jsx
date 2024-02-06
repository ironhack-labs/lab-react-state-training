import { useState } from "react";

function LikeButtons () {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    return (
        <div>
        <button className="like-buttons" onClick={() => setCount(count + 1)}>{count} Likes</button>
        <button className="like-buttons" onClick={() => setCount1(count1 + 1)}>{count1} Likes</button>
        </div>
    )
}


export default LikeButtons;