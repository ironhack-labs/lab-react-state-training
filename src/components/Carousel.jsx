import { useState } from "react";

export default function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    const goLeft = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    const goRight = () => {
        setIndex((index + 1) % images.length);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={goLeft}>Left</button>
            <img 
                src={images[index]} 
                alt={`carousel-img-${index}`} 
                style={{ width: "200px", margin: "0 10px" }} 
            />
            <button onClick={goRight}>Right</button>
        </div>
    );
}