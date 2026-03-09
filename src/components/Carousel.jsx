import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const goRight = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div>
      <img src={images[index]} alt="carousel" style={{ width: "300px" }} />
      <div>
        <button onClick={goLeft}>Left</button>
        <button onClick={goRight}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
