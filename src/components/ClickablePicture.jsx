import React from "react";
import { useState } from "react";
import maxenceImage from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

export const ClickablePicture = () => {
  const [imageSrc, setImage] = useState(maxenceImage);
  const changeImage = () => {
    console.log(imageSrc);
    if (imageSrc == maxenceImage) {
      setImage(maxenceGlasses);
    } else {
      setImage(maxenceImage);
    }
  };
  return (
    <>
      <img onClick={changeImage} src={imageSrc} />
    </>
  );
};
