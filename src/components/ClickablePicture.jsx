import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isGlasses, setIsGlasses] = useState(false);

  const toggleImage = () => {
    setIsGlasses(!isGlasses);
  };

  return (
    <div>
      <img
        src={isGlasses ? maxenceGlasses : maxence}
        alt="Maxence"
        onClick={toggleImage}
      />
    </div>
  );
}

export default ClickablePicture;
