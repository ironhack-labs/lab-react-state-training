import { useState } from "react";

function Carousel(props) {
  const [currentImgCarousel, setCurrentImgCarousel] = useState(props.images[0]);
  const handleLeftMoveImg = () => {
    setCurrentImgCarousel(currentImgCarousel - 1);
  };

  const handleRightMoveImg = () => {
    setCurrentImgCarousel(currentImgCarousel + 1);
  };

  return (
    <div>
      <button onClick={handleLeftMoveImg}>Left</button>
      <img src={currentImgCarousel} alt="img" width="200px" />
      <button onClick={handleRightMoveImg}>Right</button>
    </div>
  );
}

export default Carousel;
