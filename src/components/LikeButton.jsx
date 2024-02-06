import React, { useState } from "react";

function LikeButton ( ) {
    const [counter, setCounter] = useState(0);

    const increaseLike = () => {
        setCounter(counter +1);
    }
    return (
        <>
        <button onClick={increaseLike}> {counter} Likes</button> 
        <button onClick={increaseLike}> {counter} Likes</button>
        </>
    )
}



export default LikeButton;