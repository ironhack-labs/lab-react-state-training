import { useState } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goRight = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={goLeft}>Left</button>
      <img src={images[currentIndex]} alt="Carousel" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <button onClick={goRight}>Right</button>
    </div>
  );
}

export default Carousel;