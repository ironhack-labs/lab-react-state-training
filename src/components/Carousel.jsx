import { useState } from "react";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Izquierda
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // Derecha
    };

    return (
        <div className="carousel">
            <p>Iteration 6 - Carousel</p>
            <div>
                <button onClick={goLeft}>
                    Left
                </button>
                <img src={images[currentIndex]} alt="Carousel images"/>
                <button onClick={goRight}>
                    Right
                </button>
            </div>
        </div>
    );
}

export default Carousel;