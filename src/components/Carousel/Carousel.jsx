
import { useState } from "react";
import "./Carousel.css";

function Carousel (props) {
    
    const [currentImage, setCurrentImage] = useState(0);

  
    const goToPrevious = () => setCurrentImage((currentImage - 1 + props.images.length) % props.length);

    const goToNext = () => setCurrentImage((currentImage + 1) % props.images.length);

    return (
        <div className="carousel">
      <img src={props.images[currentImage]} />
      <div className="buttons">
        <button onClick={goToPrevious}>Left</button>
        <button onClick={goToNext}>Right</button>
      </div>
    </div>



    )
}

export default  Carousel;