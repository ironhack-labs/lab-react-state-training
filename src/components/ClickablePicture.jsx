import React, { useState } from "react";

import Image1 from "../assets/images/maxence.png";
import Image2 from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <>
      <img
        src={isFirstImage ? Image1 : Image2}
        alt="Toggle"
        onClick={handleClick}
        height={200}
      />
    </>
  );
};

export default ClickablePicture;
