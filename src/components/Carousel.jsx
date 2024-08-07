import { useState } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{ width: '200px', height: '200px' }}
      />
      <div>
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
}
