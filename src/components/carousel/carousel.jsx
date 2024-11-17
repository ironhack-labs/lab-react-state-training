import { useState } from "react";

function Carousel ({ className = "", images }) {

    const [currentImage, setCurrentImage] = useState(0);
   

    const handleClickLeft = () => {
        setCurrentImage((prevImage) => {
            return prevImage === 0 ? images.length - 1 : prevImage - 1
        });
    }

    const handleClickRight = () => {
        setCurrentImage((prevImage) => {
           return prevImage === images.length - 1  ? 0 : prevImage + 1
        });
    }
    return (
        <>
        <button onClick={handleClickLeft}>Left</button>
        <img src={images[currentImage]} alt="carousel" />
        <button onClick={handleClickRight}>Right</button>

        </>

    )
}

export default Carousel;