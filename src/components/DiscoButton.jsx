import React, { useState } from "react";

function DiscoButton ( ) {
    const [counter, setCounter] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const increaseLike = () => {
        setCounter(counter +1);

        setCurrentColorIndex((prevIndex) => (prevIndex +1) % colors.length);
    }
    return (
        <>
        <button onClick={increaseLike} style={{backgroundColor: colors[currentColorIndex]}} > {counter} Likes</button> 
        </>
    )
}



export default DiscoButton;