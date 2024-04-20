import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickPicture() {
  const [isWithGlasses, setIsWithGlasses] = useState(false);
  const toggleImage = () => {
    setIsWithGlasses((prevIsWithGlasses) => !prevIsWithGlasses);
  };

  return (
    <img
      src={isWithGlasses ? maxenceGlasses : maxence}
      alt="Maxence"
      onClick={toggleImage}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickPicture;
