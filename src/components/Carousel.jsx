import  { useState } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;