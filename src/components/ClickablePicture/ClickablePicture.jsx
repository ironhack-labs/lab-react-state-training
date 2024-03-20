import { useState } from "react";
import "./ClickablePicture.css";
import maxence from "./../../assets/images/maxence.png";
import maxenceGlasses from "./../../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [isMaxence, setIsMaxence] = useState(true);

  const handleClick = () => {
    setIsMaxence(!isMaxence);
  };

  return (
    <div className="clickable-picture-container" onClick={handleClick}>
      <img
        src={isMaxence ? maxence : maxenceGlasses}
        alt="Maxence"
        className="image"
      />
    </div>
  );
};

export default ClickablePicture;
