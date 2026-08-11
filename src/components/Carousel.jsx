import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    // Move left, wrap around
    const newIndex = (index - 1 + images.length) % images.length;
    setIndex(newIndex);
  };

  const goRight = () => {
    // Move right, wrap around
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[index]}
        alt="carousel"
        style={{ width: "200px", marginBottom: "10px" }}
      />

      <div>
        <button onClick={goLeft}>Left</button>
        <button onClick={goRight}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
