import React, { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>Left</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={nextImage}>Right</button>
    </div>
  );
}

export default Carousel;
