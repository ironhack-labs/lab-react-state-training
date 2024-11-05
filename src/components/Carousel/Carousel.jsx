import { useState } from "react";

const Carousel = ({ images }) => {
    const [imageNro, setImageNro] = useState(0);

    function incrementImage() {
        setImageNro(prev => {
            prev = (prev + 1 < images.length) ? (prev + 1) : 0;
            return prev;
        });
    }

    function decrementImage() {
        setImageNro(prev => {
            prev = (prev - 1 >= 0) ? (prev - 1) : (images.length - 1);
            return prev;
        });
    }

    return (
        <div className="Carousel">
            <button onClick={decrementImage}>Left</button>
            <img src={images[imageNro]} alt="Picture" />
            <button onClick={incrementImage}>Right</button>
        </div>
    )
}

export default Carousel;