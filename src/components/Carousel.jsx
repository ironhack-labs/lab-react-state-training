import React, { useState } from 'react';

function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    const goLeft = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goRight = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <button onClick={goLeft}>Left</button>
            <img src={images[index]} alt="Carousel" />
            <button onClick={goRight}>Right</button>
        </div>
    );
}

export default Carousel;
