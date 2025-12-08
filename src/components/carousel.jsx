import { useState } from "react";

function Carousel({ images = [] }) {
  
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;

  const next = () => {
    if (!hasImages) return;
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    if (!hasImages) return;
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!hasImages) {
    return <p>No images to show</p>;
  }

  return (
    <div className="carousel">
      <button onClick={prev}>Left</button>
      <img src={images[index]} alt={`Carousel ${index + 1}`} />
      <button onClick={next}>Right</button>
    </div>
  );
}

export default Carousel;
