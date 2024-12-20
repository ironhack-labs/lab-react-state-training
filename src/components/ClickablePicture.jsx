import { useState } from "react";
import boy from "../assets/images/maxence.png";
import glasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [currentImage, setCurrentImage] = useState(boy);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === boy ? glasses : boy));
  };

  return <img src={currentImage} alt="boy" onClick={toggleImage} />;
}

export default ClickablePicture;
