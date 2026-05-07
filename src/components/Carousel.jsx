import { useState } from "react";

function Carousel({ images }) {
    const [index, setIndex] = useState(0);
    const handleRight = () => {
        setIndex((index + 1) % images.length);
    };

    const handleLeft = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={handleLeft}>Left</button>

            <img src={images[index]} alt="Carousel" style={{ width: "200px"}} />

            <button onClick={handleRight}>Right</button>
        </div>
    );
}

export default Carousel