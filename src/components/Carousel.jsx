import { useState } from "react";

export default function Carousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  function increment() {
    setImageIndex((prevIndex) =>
      prevIndex >= images.length - 1 ? 0 : prevIndex + 1
    );
  }
  function decrement() {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="Carousel">
      <button onClick={decrement}>Left</button>
      <img src={images[imageIndex]} />
      <button onClick={increment}>Right</button>
    </div>
  );
}
