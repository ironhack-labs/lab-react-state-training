import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [picture, setPicture] = useState(image1);
  const handleClickImage = () => {
    setPicture(picture === image1 ? image2 : image1);
  }

  return (
    <img src={picture} onClick={handleClickImage} />
  );
}

export default ClickablePicture;