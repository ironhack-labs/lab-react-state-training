import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [currentImage, setCurrentImage] = useState(image1);
  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
  };
  return <img src={currentImage} alt="Clickable" onClick={toggleImage} />;
}

export default ClickablePicture;
