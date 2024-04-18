import React, { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={goToPrevious}>Previous</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={goToNext}>Next</button>
    </div>
  );
}

export default Carousel;
