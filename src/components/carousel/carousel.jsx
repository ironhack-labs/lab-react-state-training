import { useState } from "react";

function Carousel({ className = "", images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeImageRight = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const handleChangeImageLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((currentIndex - 1) % images.length);
    }
  };
  return (
    <div>
      <button
        className="btn btn-secondary btn-sm "
        onClick={handleChangeImageLeft}
      ></button>
      <img src={images[currentIndex]} alt="" />
      <button
        className="btn btn-secondary btn-sm"
        onClick={handleChangeImageRight}
      ></button>
    </div>
  );
}
export default Carousel;
