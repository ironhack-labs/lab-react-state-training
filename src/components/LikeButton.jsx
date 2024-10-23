import { useState } from "react";

const LikeButton = () => {
    
    const [count, setCount] = useState(0); // initially 0 likes

    const increaseCount = () => {
        setCount(count + 1) // increase count by one
        console.log("clicked")
    };

    return (
        <div>
            <button onClick={() => {increaseCount()}}>{count} Likes</button>
        </div>
    )
}

export default LikeButton; 