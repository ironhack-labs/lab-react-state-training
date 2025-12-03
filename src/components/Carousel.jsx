import { useState } from "react";

function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    function nextImage() {
        setIndex((index + 1) % images.length);
    }

    function prevImage() {
        setIndex((index - 1 + images.length) % images.length);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <img
                src={images[index]}
                alt="carousel"
                style={{ width: "200px", borderRadius: "8px" }}
            />
            <div>
                <button onClick={prevImage}>Left</button>
                <button onClick={nextImage}>Right</button>
            </div>
        </div>
    );
}

export default Carousel;