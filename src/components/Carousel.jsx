import { useState } from "react";

export function Carousel({ images }) {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const handleLeftClick = () => {
    if (currImageIndex === 0) {
      setCurrImageIndex(images.length - 1);
    } else {
      setCurrImageIndex(currImageIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currImageIndex === images.length - 1) {
      setCurrImageIndex(0);
    } else {
      setCurrImageIndex(currImageIndex + 1);
    }
  };

  return (
    <>
      <button onClick={handleLeftClick}>Left</button>
      <img 
        src={images[currImageIndex]} 
        alt="Image of Person" 
      />
      <button onClick={handleRightClick}>Right</button>
    </>
  );
}