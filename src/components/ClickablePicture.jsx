import React, { useState } from "react";
import picture from "../assets/images/maxence.png";
import pictureGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isWithGlases, setIsWithGlasses] = useState(false);

  const handleClick = () => {
    setIsWithGlasses(!isWithGlases);
  };

  return (
    <div>
      <img
        src={isWithGlases ? pictureGlasses : picture}
        alt="picture"
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;
