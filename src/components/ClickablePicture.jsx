import "./ClickablePicture.css";
import img from "../assets/images/maxence.png";
import imgGlasses from "../assets/images/maxence-glasses.png";

import { useState } from "react";

export const ClickablePicture = () => {
  const [imgState, setImgState] = useState(false);

  const changeImg = () => {
    setImgState(!imgState);
  };

  return imgState == false ? (
    <img onClick={changeImg} src={img} alt="Maxence" />
  ) : (
    <img onClick={changeImg} src={imgGlasses} alt="Maxence" />
  );
};
