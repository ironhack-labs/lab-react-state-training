import { useState } from "react";

function Carousel({ images }) {
  const [imageIndex, setimageIndex] = useState(0);

  const handleClickLeft = () => setimageIndex((imageIndex - 1 + images.length) % images.length);
  const handleClickRight = () => setimageIndex((imageIndex + 1) % images.length);

  return (
    <div className="carousel-container">
      <button className="carousel-left-btn" onClick={handleClickLeft}>Left</button>
      <img src={images[imageIndex]} alt="Image" className="carousel-image" />
      <button className="carousel-right-btn" onClick={handleClickRight}>Right</button>
    </div>
  );
}
export default Carousel;
