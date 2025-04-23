import { useState } from "react";
import firstImage from "../assets/images/maxence.png";
import secondImage from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [imageSrc, setImageSrc] = useState(firstImage);
  const handleClick = () => {
    if (imageSrc === firstImage) {
      setImageSrc(secondImage);
    } else {
      setImageSrc(firstImage);
    }
  };

  return (
    <div>
      <img src={imageSrc} alt={""} onClick={handleClick} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default ClickablePicture;
