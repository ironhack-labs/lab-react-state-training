import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const changeImage = (direction) => {
    if (direction === "left") {
      setIndex((index - 1 + images.length) % images.length);
    } else {
      setIndex((index + 1) % images.length);
    }
  };

  return (
    <>
      <div className="imgCarouselBtn">
        <button onClick={() => changeImage("left")}>Left</button>
        <img src={images[index]} />
        <button onClick={() => changeImage("right")}>Right</button>
      </div>
    </>
  );
}

export default Carousel;
