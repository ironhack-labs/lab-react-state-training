import { useState } from "react";
import image1 from "./assets/images/maxence.png";
import image2 from "./assets/images/maxence-glasses.png";

const ClickablePicture = ({ image1, image2 }) => {
  const [currentImage, setCurrentImage] = useState(image1);

  const handleClick = () => {
    setCurrentImage(currentImage === image1 ? image2 : image1);
  };

  return <img src={currentImage} alt="clickable" onClick={handleClick} />;
};

export default ClickablePicture;
