import React, { useState } from "react";
import sunglasses from "../assets/images/maxence-glasses.png"
import face from "../assets/images/maxence.png"


function ClickablePicture() {
  const [showGlasses, setShowGlasses] = useState(false);

  const handleClick = () => {
    setShowGlasses(!showGlasses);
  };

  return (
    <div
      onClick={handleClick}
      style={{ position: "relative", width: "300px", cursor: "pointer" }}
    >
      <img src={face} alt="face" style={{ width: "100%" }} />
      {showGlasses && (
        <img
          src={sunglasses}
          alt="sunglasses"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "300px",
          }}
        />
      )}
    </div>
  );
}

export default ClickablePicture;
