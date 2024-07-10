import { useState } from "react";

function Carousel({ images }) {
  const [image, setImage] = useState(images[0]);
  const index = images.indexOf(image);
  const handleLeft = () => {
    index === 0
      ? setImage(images[images.length - 1])
      : setImage(images[index - 1]);
  };

  const handleRight = () => {
    index === images.length - 1
      ? setImage(images[0])
      : setImage(images[index + 1]);
  };

  return (
    <div>
      <button onClick={handleLeft}>Left</button>
      <img src={image} alt="" />
      <button onClick={handleRight}>Right</button>
    </div>
  );
}

export default Carousel;
