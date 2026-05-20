import { useState } from "react";

function Carousel({ images }) {
  let [index, setIndex] = useState(0);

  const moveLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  const moveRight = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex((index = 0));
    }
  };

  return (
    <div>
      <button onClick={moveLeft}>Left</button>
      <img
        style={{ width: 200, height: 200, marginBottom: 10 }}
        src={images[index]}
        alt={`Image ${index}`}
      />
      <button onClick={moveRight}>Right</button>
    </div>
  );
}

export default Carousel;
