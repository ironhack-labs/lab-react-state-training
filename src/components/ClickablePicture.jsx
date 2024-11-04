import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";
import { useState } from "react";

export const ClickablePicture = () => {
  const [imgPath, setImgPath] = useState(image1);

  const toggleImage = (imgPath) => {
    imgPath === image1 ? setImgPath(image2) : setImgPath(image1);
  };

  return (
    <div>
      <img src={imgPath} onClick={() => toggleImage(imgPath)} />
    </div>
  );
};
