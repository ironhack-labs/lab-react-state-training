import { useState } from "react";

function LikeButton () {

    const [counter, setCounter] = useState(0)

    function increaseCounter () {
        setCounter (counter + 1)
    }

    return (
        <div>
            <button onClick={increaseCounter}>{counter} Likes</button>
        </div>
    )
}

export default LikeButton