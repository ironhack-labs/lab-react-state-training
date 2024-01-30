import { useState } from "react";
import maxenceImage from "../assets/images/maxence.png";
import maxenceGlassesImage from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <div>
      <img
        src={isClicked ? maxenceImage : maxenceGlassesImage}
        alt="Clickable Picture"
        onClick={handleClick}
      />
    </div>
  );
};

export default ClickablePicture;
