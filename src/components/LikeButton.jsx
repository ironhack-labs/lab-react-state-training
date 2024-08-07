import { useState } from "react";

function LikeButton () {
    
    const [counter, setCounter] = useState (0);

    const increaseCounter = () => {
        setCounter(counter + 1); 
    }
    
    return (
        <div className="likeButton">
            <button onClick={increaseCounter}>{counter} Likes</button>
        </div>
    )
}

export default LikeButton;