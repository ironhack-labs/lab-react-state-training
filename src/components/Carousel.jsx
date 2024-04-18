import { useState } from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="carousel">
      <button
        className="carousel-left-btn"
        onClick={() => {
          setIndex(Math.max(0, index - 1));
        }}
      >
        Left
      </button>
      <img className="carousel-img" src={images[index]}></img>
      <button
        className="carousel-right-btn"
        onClick={() => {
          setIndex(Math.min(index + 1, images.length - 1));
        }}
      >
        Right
      </button>
    </div>
  );
};
export default Carousel;
