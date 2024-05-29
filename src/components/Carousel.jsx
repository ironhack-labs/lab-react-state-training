import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} />
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
};

export default Carousel;
