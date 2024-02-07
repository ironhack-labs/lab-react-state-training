import React from "react";
import { useState } from "react";
import "./LikeButton.css";


function LikeButton(){
    const [increaseCount, setIncreaseCount] = useState(0);
    const [decreaseCount, setDecreaseCount] = useState(0);

    const increaseCounter = () => {
        setIncreaseCount(increaseCount + 1);
    };
    const decreaseCounter = () => {
        setDecreaseCount(decreaseCount + 1);
    };
    return (
        <>
            <button onClick={increaseCounter}>{increaseCount} Likes</button>
            <button onClick={decreaseCounter}>{decreaseCount} Likes</button>
        </>
    );
}

export default LikeButton;