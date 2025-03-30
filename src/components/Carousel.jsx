import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <img src={images[index]} alt="carousel" width="100" />
      <div>
        <button onClick={goLeft}>Left</button>
        <button onClick={goRight}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
