import { useState } from "react";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goRight = () => {
  setCurrentIndex((currentIndex + 1) % images.length);
};

    const goLeft = () => {
  setCurrentIndex((currentIndex - 1 + images.length) % images.length);
};


  return (
    <div>
      <button onClick={goLeft}>Left</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={goRight}>Right</button>
    </div>
  );
}

export default Carousel;