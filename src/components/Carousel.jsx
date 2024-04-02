import { useState } from "react";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Use an index to control the displayed image

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="imageCarousel">
      <button className="counterButtonImg" onClick={handlePrevious}>
        <p>Left</p>
      </button>
      <img src={images[currentImageIndex]} alt="Carousel" />
      <button className="counterButtonImg" onClick={handleNext}>
        <p>Right</p>
      </button>
    </div>
  );
}
//
export default Carousel;
