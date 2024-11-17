import { useState } from "react";
import noGlasses from "./../../assets/images/maxence.png";
import withGlasses from "./../../assets/images/maxence-glasses.png";

function ClickableImage({ className = "" }) {
  const [currentImage, setImage] = useState(noGlasses);

  const handleImageChange = () => {
    if (currentImage === noGlasses) {
      setImage(withGlasses);
    } else {
      setImage(noGlasses);
    }
  };

  const imgStyle = {
    cursor: "pointer",
  };

  return (
    <img
      className={className}
      onClick={handleImageChange}
      src={currentImage}
      alt="glasses Img"
      style={imgStyle}
    />
  );
}

export default ClickableImage;
