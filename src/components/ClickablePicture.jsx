import { useState } from "react";
import originalImage from "../assets/images/maxence.png";
import alternateImage from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isSwag, setisSwag] = useState(false);

  let displayImage;

  isSwag ? (displayImage = alternateImage) : (displayImage = originalImage);

  const handleClickablePicture = () => {
    setisSwag(!isSwag);
  };

  return <img src={displayImage} onClick={handleClickablePicture} />;
}

export default ClickablePicture;
