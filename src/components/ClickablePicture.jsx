import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";
export const ClickablePicture = () => {
  const style = {
    position: "absolute"
  }
  const [isPictureHidden, setIsPictureHidden] = useState(false)
  const handlePicture = () => {
    setIsPictureHidden(prev => !isPictureHidden)
  }
  return (
    <div style={{ position: "relative" }}>
      <img
        name="noGlasses"
        src={maxence}
        alt="Maxence without glasses"
        onClick={handlePicture}
        hidden={isPictureHidden}
        style={style}
      />
      <img
        name="glasses"
        src={maxenceGlasses}
        alt="Maxence with glasses"
        onClick={handlePicture}
      />
    </div>
  );
};
