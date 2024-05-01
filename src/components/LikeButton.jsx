import { useState } from "react";
import "./LikeButton.css"

const LikeButton = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <button onClick={() => setCounter(counter + 1)} className="my-button">{counter} Likes</button>
        </>
    )
};

export default LikeButton;