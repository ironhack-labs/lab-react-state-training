import { useState } from "react";
const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
};

export default Carousel;
