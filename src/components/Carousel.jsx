import { useState } from "react"
import dice from '../assets/images/dice-empty.png'

export const Carousel = ({ images }) => {
    let [index, setIndex] = useState(0)
    const handleCarousel = (e) => {
        setIndex(prev =>
            e.target.name === "right"
                ? (prev + 1) % images.length
                : (prev - 1 + images.length) % images.length
        );
    };

    return (
        <div>
            <button name='left' onClick={handleCarousel}>Left</button>
            <img src={images[index]} alt="Carousel images" />
            <button name='right' onClick={handleCarousel}>Right</button>
        </div>
    )
}