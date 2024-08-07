import { useState } from "react";

function Carousel({ images }) {
  const [counter, setCounter] = useState(0);

  function changePicture(direction) {
    if (direction === "left") {
      if (counter === 0) {
        setCounter(images.length - 1);
        return;
      }
      setCounter((c) => --c);
    }
    if (direction === "right") {
      if (counter === images.length - 1) {
        setCounter(0);
        return;
      }
      setCounter((c) => ++c);
    }
  }

  return (
    <div>
      <button onClick={() => changePicture("left")}>Left</button>
      <img src={images[counter]} alt="Person" />
      <button onClick={() => changePicture("right")}>Right</button>
    </div>
  );
}

export default Carousel;
