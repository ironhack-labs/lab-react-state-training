import { useState } from "react";

export const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div>
      <button onClick={handlePrevious}>Left</button>
      <img src={images[index]} alt={`carousel ${index}`} />
      <button onClick={handleNext}>Right</button>
    </div>
  );
};
