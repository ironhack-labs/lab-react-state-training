import { useState } from "react";

function LikeButton () {
    const [count, setCount] = useState(() => 0);
    const [count1, setCount1] = useState (() => 0);

    return (
        <div>
            <button className = "btn-counter" onClick={() => setCount(count + 1)}>{count} Likes</button>
            <button className = "btn-counter" onClick={() => setCount1(count1 + 1)}>{count1} Likes</button>
        </div>

    )
}

export default LikeButton;