import { useState } from "react";

export default function Carousel({images}) {
    const [imgIndex, setImgIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setImgIndex((imgIndex - 1 + images.length) % images.length);
        } else {
            setImgIndex((imgIndex + 1) % images.length);
        }
    };
    return (
        <div>
            <button onClick={() => handleClick("left")}>Left</button>
            <img src={images[imgIndex]} />
            <button onClick={() => handleClick("right")}>Right</button>
        </div>
    );
}