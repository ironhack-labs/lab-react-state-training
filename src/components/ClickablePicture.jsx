import { useState } from "react";
import imgWithGlasses from "../assets/images/maxence-glasses.png";
import imgWithoutGlasses from "../assets/images/maxence.png";

function ClickablePicture() {
  const [isWithGlasses, setIsWithGlasses] = useState(false);
  const toggleImage = () => {
    setIsWithGlasses(!isWithGlasses);
  };

  return (
    <img
      src={isWithGlasses ? imgWithGlasses : imgWithoutGlasses}
      onClick={toggleImage}
      alt="profile"
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
