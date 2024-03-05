import React, { useState } from "react";

import Arteta1 from "../assets/images/Arteta.jpeg";
import Arteta2 from "../assets/images/Arteta_glasses.jpeg";
export const PicClick = () => {
  let [img1, setImg1] = useState(true);

  const Click = () => {
    setImg1(!img1);
  };
  const images = img1 ? Arteta1 : Arteta2;
  return <img src={images} onClick={Click} />;
};
export default PicClick;
