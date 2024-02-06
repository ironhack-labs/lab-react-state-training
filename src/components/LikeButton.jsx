import { useState } from "react";

function LikeButton() {

    const [counter, updateCounter] = useState(0)

    function increaseLikes() {
        updateCounter(counter + 1)
    }

    return <button className="likes-btn" onClick={increaseLikes}>{counter} Likes</button>
}

export default LikeButton;