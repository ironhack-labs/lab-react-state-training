import { useState } from 'react';

export default function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    const handleNextClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevClick = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <button onClick={handlePrevClick}>Left</button>
            <img src={images[index]} alt="Carousel" />
            <button onClick={handleNextClick}>Right</button>
        </div>
    );
}
