import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={prev}>Left</button>
      <img
        src={images[index]}
        alt={`Carousel ${index}`}
        style={{ width: "200px", margin: "0 10px" }}
      />
      <button onClick={next}>Right</button>
    </div>
  );
}

export default Carousel;
