import React, { useState } from "react";

function Carousel({ className = "", images }) {
  const [count, setCount] = useState(0);

  const right = () => {
    count < images.length - 1 ? setCount(count + 1) : setCount(0);
  };

  const left = () => {
    count <= 0 ? setCount(images.length - 1) : setCount(count - 1);
  };

  return (
    <div className="carousel-contain">
      <button className="carousel-button" onClick={() => left()}>
        Left
      </button>
      <img src={images[count]} className="m-2" alt="carousel" />
      <button className="carousel-button" onClick={() => right()}>
        Right
      </button>
    </div>
  );
}

export default Carousel;
