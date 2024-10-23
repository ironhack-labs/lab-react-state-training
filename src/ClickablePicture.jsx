import { useState } from "react";
import image1 from "./assets/images/maxence.png";
import image2 from "./assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const toogleImage = () => {
    if (currentImage === image1) {
      setCurrentImage(image2);
    } else {
      setCurrentImage(image1);
    }
  };

  return <img src={currentImage} onClick={toogleImage} />;
};

export default ClickablePicture;
