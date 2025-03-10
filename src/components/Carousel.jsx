import { useState, useEffect } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 
    return () => clearInterval(interval); 
  }, [index]);

  return (
    <div>
      <button onClick={prevImage}>Left</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={nextImage}>Right</button>
    </div>
  );
}

export default Carousel;
