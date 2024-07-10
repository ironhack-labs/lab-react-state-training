import React, { useState } from "react";
import picture1 from "../assets/images/maxence.png";
import picture2 from "../assets/images/maxence-glasses.png";

const ClicablePicture = () => {
  const [currentPicture, setCurrentPicture] = useState(picture1);
  const togglePicture = () => {
    setCurrentPicture(currentPicture === picture1 ? picture2 : picture1);
  };
  return (
    <img
      src={currentPicture}
      alt="Clicable"
      onClick={togglePicture}
      style={{ cursor: "pointer", width: "300px", height: "auto" }}
    />
  );
};
export default ClicablePicture;
