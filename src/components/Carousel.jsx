import { useState } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={goLeft}>Left</button>

      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{
          width: "200px",
          margin: "0 10px",
          borderRadius: "10px",
        }}
      />

      <button onClick={goRight}>Right</button>
    </div>
  );
}