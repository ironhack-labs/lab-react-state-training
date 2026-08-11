import React, { useState } from "react";
import "./ClickablePicture.css";

import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <div className="clickable-picture">
      <img
        src={isFirstImage ? image1 : image2}
        alt="Clickable picture"
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;
