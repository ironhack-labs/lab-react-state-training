import react, { useState } from "react";

function Carousel({images}) {
  const [currentImageIndex, setImageIndex] = useState(0);

  const changeImageLeft = () => {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setImageIndex(newIndex);
  };

  const changeImageRight = () => {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setImageIndex(newIndex);
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt="image" />
      <div>
        <button onClick={changeImageLeft}>Left</button>
        <button onClick={changeImageRight}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
