import { useState } from "react";

function Carousel({ images }) {
    const [currentImage, setCurrentImage] = useState(0);  

    const handleLeftClick = () => { // Clicking Left when the first image is displayed shows the last image
        setCurrentImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    }

    const handleRightClick = () => {    // Clicking Right when the last image is displayed shows the first image
        setCurrentImage((prevImage) =>
            prevImage === images.length - 1 ? 0 : prevImage + 1
        );
    }

    return (
        <div style={{ textAlign: 'center',  position: "relative" }} >
            <button onClick={handleLeftClick} style={{ bottom: "-10px", position: "absolute", left: "-42px"  }} >Left</button>   

            <img src={images[currentImage]} alt="Carousel Image" style={{ width: "300px", height:"300px" }} />

            <button onClick={handleRightClick} style={{ position: "absolute", bottom: "-10px" }} >Right</button>

        </div>
    );
}

export default Carousel;