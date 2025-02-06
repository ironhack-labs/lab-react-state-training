import { useState } from "react";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="Carousel">
            <button onClick={goLeft} >Left </button>
            <img src={images[currentIndex]} alt="Images" />
            <button onClick={goRight}> Right </button>
        </div>
    );
}

export default Carousel;