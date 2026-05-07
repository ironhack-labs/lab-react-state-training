import { useState } from "react";

function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleLeft() {
        if (currentIndex === 0) {
            setCurrentIndex(props.images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function handleRight() {
        setCurrentIndex((currentIndex + 1) % props.images.length);
    }

    return (
        <div>
            <button onClick={handleLeft}>Left</button>
            <img
              src={props.images[currentIndex]}
              alt={'slide ${currentIndex}'}
              style={{ width: "200px", height: "200px", objectFit: "cover"}}
              />
              <button onClick={handleRight}>Right</button>
        </div>
    );
}

export default Carousel;