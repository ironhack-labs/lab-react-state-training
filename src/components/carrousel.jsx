
import { useState } from "react";

function Carousel( {images} ) {
    const [image, setImage] = useState(0);

    return (
        <div className="d-flex align-items-end">
            <button 
                onClick={() => setImage(image === 0 ? images.length - 1 : image - 1)}
            >
                Left
            </button>
            <img
                className="pb-2"
                src={images[image]}
            />
            <button 
                onClick={() => setImage(image === images.length - 1 ? 0 : image + 1)}
            >
                Right
            </button>
        </div>
    );
}

export default Carousel;