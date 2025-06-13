import { useState } from "react";
import glasses from "../assets/images/maxence-glasses.png";
import noGlasses from "../assets/images/maxence.png";

const ClickablePicture = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggleImage = () => {
    setShowSecondImage(!showSecondImage);
  };
  return (
    <>
      <img
        src={showSecondImage ? glasses : noGlasses}
        alt={showSecondImage ? "Second Image" : "First Image"}
        onClick={toggleImage}
      />
    </>
  );
};
export default ClickablePicture;
