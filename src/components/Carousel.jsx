import { useState } from "react";

const Carousel = ({ imgs }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const previousImageHandler = () => {
    setImgIndex(imgIndex <= 0 ? 0 : (imgIndex - 1) % imgs.length);
  };
  const nextImageHandler = () => {
    setImgIndex(imgIndex >= imgs.length - 1 ? imgs.length - 1 : imgIndex + 1);
  };
  return (
    <div>
      <button type="button" onClick={previousImageHandler}>
        Left
      </button>
      <img src={imgs[imgIndex]} alt="Images" />
      <button type="button" onClick={nextImageHandler}>
        Right
      </button>
    </div>
  );
};

export default Carousel;
