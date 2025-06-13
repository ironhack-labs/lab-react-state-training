import { useState } from "react";
import Button from "../uiComponents/button";
// import { images } from "../lib/imageArray"

const Carousel = ({ imgArr }) => {
  const [carouselImageIndex, setCarouselImageIndex] = useState(0);

  const rightBtnhandler = () => {
    setCarouselImageIndex((prevIndex) => (prevIndex + 1) % imgArr.length);
  };
  const leftBtnhandler = () => {
    setCarouselImageIndex((prevIndex) => (prevIndex - 1 + imgArr.length) % imgArr.length);
  };

  return (
    <>
      <Button onClick={leftBtnhandler}>Left</Button>
      <img src={imgArr[carouselImageIndex]} alt="carousel images" />
      <Button onClick={rightBtnhandler}>Right</Button>
    </>
  );
};
export default Carousel;
