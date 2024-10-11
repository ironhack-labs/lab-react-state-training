import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Go to the last image if at the first, else go to the previous image
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 // Go to the first image if at the last, else go to the next image
    );
  };

  return (
    <div>
      <img
        src={images[currentIndex]} // Display the current image
        alt={`carousel ${currentIndex}`}
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <div>
        <button onClick={handleLeftClick}>Left</button> {/* Left button */}
        <button onClick={handleRightClick}>Right</button> {/* Right button */}
      </div>
    </div>
  );
};

export default Carousel;
