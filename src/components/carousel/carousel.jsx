import { useState } from "react";

function Carousel({ className = "", images}) {
    const [index, setIndex] = useState(0);
    const totalImgs = images.length;
    
    const handleLeftClick = () => {
        if ( index > 0 ) {
            setIndex( index - 1 );
        }
    }

    const handleRightClick = () => {
        if ( index < totalImgs - 1 ) {
            setIndex( index + 1 );
        }
    }
    return (
        <div className={`d-flex align-items-end ${className}`}>
            <button className="btn btn-light border rounded-0" onClick={handleLeftClick}>Left</button>
            <img style={{ width: 200}} src={images[index]} alt="carousel"/>
            <button className="btn btn-light border rounded-0" onClick={handleRightClick}>Right</button>
        </div>
    );
}

export default Carousel;