import React, { useState } from "react";

function Carousel({ images }) {
  const [currentImageIndex, setImageIndex] = useState(0);

  const handleLeftClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[currentImageIndex]} alt="Carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;
