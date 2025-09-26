import React from "react";
import { useState } from "react"

function LikeButton() {

    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <header>
            <h1>Number of Likes: {counter}</h1>
            <button onClick= {increaseCounter}> {counter} Likes</button>
        </header>
    )
}

export default LikeButton