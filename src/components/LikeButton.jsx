import { useState } from "react";



function LikeButton () {

    const [counter, increaseCount] = useState(0);

    return (
        <button onClick={() => increaseCount(counter + 1)}>{counter} Likes</button>
    )
}

export default LikeButton;