import { useState } from "react";
import "./carousel.css"

function Carousel ( {images} ) {

    const [index, setIndex] = useState (1)

    function goLeft () {
            setIndex((index - 1 + images.length) % images.length)
        
    }
    function goRight () {
            setIndex((index + 1) % images.length)
    }
    return (
        <div>
            <button className="btnLeft" onClick={goLeft}>LEFT</button>
            <img className="carousel" src={images[index]} alt="carousel"/>
            <button className="btnRight" onClick={goRight}>RIGHT</button>
        </div>
    )
}

export default Carousel