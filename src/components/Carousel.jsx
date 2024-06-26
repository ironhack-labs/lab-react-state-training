import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div>
      <button onClick={goToPrevious}>Left</button>
      <img src={images[currentImageIndex]} alt="carousel" />
      <button onClick={goToNext}>Right</button>
    </div>
  );
};

export default Carousel;
