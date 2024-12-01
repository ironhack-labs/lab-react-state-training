import { useState } from "react";

function Carousel({ images, className = "" }) {
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
    <div className={`d-flex flex-column align-items-center ${className}`}>
      <div className="mb-3">
        <img
          src={images[currentIndex]}
          alt={`Carousel ${currentIndex}`}
          className="img-fluid rounded"
          style={{ maxWidth: "300px" }}
        />
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-secondary btn-sm" onClick={handleLeftClick}>
          Left
        </button>
        <button className="btn btn-primary btn-sm" onClick={handleRightClick}>
          Right
        </button>
      </div>
    </div>
  );
}

export default Carousel;
