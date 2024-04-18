import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [currentImage, setCurrentImage] = useState(image1);

  const handleToggle = () => {
    setCurrentImage(currentImage === image1 ? image2 : image1);
  };

  return (
    <div>
      <img src={currentImage} onClick={handleToggle} />
    </div>
  );
}

export default ClickablePicture;
