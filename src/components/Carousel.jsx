import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleRight = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[index]} alt={`Image ${index + 1}`} />

      <div className="carousel-actions">
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;