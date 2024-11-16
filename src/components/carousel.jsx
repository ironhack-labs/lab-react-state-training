import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt={`Carousel ${currentIndex}`}
        style={{ width: '200px', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
      />
      <div>
        <button onClick={handleLeftClick} style={{ marginRight: '10px' }}>
          Left
        </button>
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
