import { useState } from "react";
import "./ClickablePicture.css";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [picture, setPicture] = useState(maxence);
  const togglePicture = () => {
    setPicture(picture === maxence ? maxenceGlasses : maxence);
  };
  return (
    <img
      src={picture}
      alt="Picture"
      onClick={togglePicture}
      className="clickablePicture"
    />
  );
};

export default ClickablePicture;
