import React, { useState } from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";

const ClickablePicture = ({ img1, img2 }) => {
  const [currentImg, setCurrentImg] = useState(img1);

  const handleClick = () => {
    setCurrentImg(currentImg === img1 ? img2 : img1);
  };

  return <img src={currentImg} alt="clickable" onClick={handleClick} />;
};

export default ClickablePicture;
