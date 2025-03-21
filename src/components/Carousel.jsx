import { useState } from "react";

function Carousel({ images }) {
  const [currentImageIndex, setImageIndex] = useState(0);

  const leftHandler = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const rightHandler = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={leftHandler}>Left</button>
      <img src={images[currentImageIndex]} />
      <button onClick={rightHandler}>Right</button>
    </div>
  );
}

export default Carousel;
