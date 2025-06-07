import React, { useState } from "react";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const NextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const PreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div>
        <img
          src={images[currentImageIndex]}
          alt="Carousel"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div>
        <button onClick={PreviousImage}>Left</button>
        <button onClick={NextImage}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
