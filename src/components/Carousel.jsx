import { useState } from "react";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function clickLeftButton() {
    if (currentIndex === 0) {
      setCurrentIndex(props.images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function clickRightButton() {
    if (currentIndex === props.images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="m-5">
      <button onClick={clickLeftButton}>Left</button>
      <img src={props.images[currentIndex]} alt="photo" />
      <button onClick={clickRightButton}>Right</button>
    </div>
  );
}

export default Carousel;
