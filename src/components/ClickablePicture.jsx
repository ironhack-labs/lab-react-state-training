import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence_glasses.png";

const ClickablePicture = () => {
  const [currentImage, setCurrentImage] = useState(maxence);

  const handleImageToggle = () => {
    setCurrentImage(currentImage === maxence ? maxenceGlasses : maxence);
  };

  return (
    <img
      src={currentImage}
      alt="Clickable"
      onClick={handleImageToggle}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ClickablePicture;
