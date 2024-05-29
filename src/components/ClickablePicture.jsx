import React, { useState } from "react";

const ClickablePicture = ({ image1, image2 }) => {
  const [currentImage, setCurrentImage] = useState(image1);

  const handleClick = () => {
    setCurrentImage(currentImage === image1 ? image2 : image1);
  };

  return <img src={currentImage} alt="Picture" onClick={handleClick} />;
};

export default ClickablePicture;
