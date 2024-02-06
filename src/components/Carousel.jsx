import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [imgIndex , setImgIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setImgIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setImgIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="carousel">
      <img src={images[imgIndex]} alt={`Slide ${imgIndex + 1}`} />
      <div className="buttons">
        <button onClick={() => handleClick('left')}>Left</button>
        <button onClick={() => handleClick('right')}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;