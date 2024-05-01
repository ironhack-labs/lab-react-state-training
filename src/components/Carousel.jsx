import { useState } from "react";
import "./Carousel.css";

let counter = 0;

const Carousel = (prop) => {
    const [imgURL, setURL] = useState(prop.images[counter]);

    return (
        <>
            <div className="carousel-container">
                <button onClick={() => {
                    if(counter <= 0){
                        counter = prop.images.length - 1
                    } else {
                        counter--;
                    }
                    setURL(prop.images[counter % prop.images.length]);
                }} className="button-carousel">Left</button>
                <img className="img-carousel" src={imgURL} alt="image" />
                <button onClick={() => {
                    counter++;
                    setURL(prop.images[counter % prop.images.length]);
                }} className="button-carousel">Right</button>
            </div>
        </>
    )
};

export default Carousel;