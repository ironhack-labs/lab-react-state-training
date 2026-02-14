import { useState } from "react";
import normalImage from "../assets/images/maxence.png";
import clickedImage from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toogleImage = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? clickedImage : normalImage}
      alt="Clickable"
      onClick={toogleImage}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
};

export default ClickablePicture;
