import React, { useState } from "react";
import Picture1 from "../assets/images/maxence.png";
import Picture2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isWithGlasses, setIsWithGlasses] = useState(false);

  const toggleGlasses = () => {
    setIsWithGlasses(!isWithGlasses);
  };

  return (
    <div>
      <button onClick={toggleGlasses}>
        <img src={isWithGlasses ? Picture2 : Picture1} alt="Maxence" />
      </button>
    </div>
  );
}

export default ClickablePicture;
