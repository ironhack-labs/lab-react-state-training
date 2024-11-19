import { useState } from "react";

function LikeButton() {
    const [likeCount, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(likeCount + 1)}>{likeCount}likes</button>
        </>
    )
}

export default LikeButton;