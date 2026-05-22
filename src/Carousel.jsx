import { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goRight = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={goLeft}>◀</button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
      />
      <button className="carousel-btn" onClick={goRight}>▶</button>
    </div>
  );
}

export default Carousel;