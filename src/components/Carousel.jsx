import React, { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <img
        src={images[index]}
        alt="carousel"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <br />
      <button onClick={prev}>Left</button>
      <button onClick={next}>Right</button>
    </div>
  );
}

export default Carousel;