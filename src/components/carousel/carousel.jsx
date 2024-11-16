import { useState } from "react";

function Carousel({images}) {
    const [image, setImage] = useState(images[0]);

    const handleLeft = () => {

        const currentIndex = images.indexOf(image);
        setImage(images[(currentIndex - 1 + images.length) % images.length]);
    }

    const handleRight = () => {

        const currentIndex = images.indexOf(image);
        setImage(images[(currentIndex + 1) % images.length]);

    
    }



    return (
        <div className="d-inline -flex flex-row">
            <button className="btn btn-sm border btn-light" onClick={handleLeft}>Left</button>
            <img style={{width: 120, height:120}} src={image} />
            <button className="btn btn-sm border btn-light" onClick={handleRight}>Right</button>
        </div>
    )
}

export default Carousel;