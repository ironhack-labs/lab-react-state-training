import React, { useState } from "react";

export default function Carousel({ images }) {

    const [index, setIndex] = useState(0);

    const increment = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    const decrement = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <>
        <button onClick={decrement}> Left </button>
        <img src={images[index]} alt={`Pic ${index}`} />
        <button onClick={increment}> Right </button>
        </>
    )
}