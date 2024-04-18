import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceglasses from "../assets/images/maxenceglasses.png";
import "./clickablePicture.css";

function ClickablePicture() {
  const [showGlasses, setShowGlasses] = useState(false);

  function toggleGlasses() {
    setShowGlasses(!showGlasses);
  }

  return (
    <>
      <div className="container">
        {showGlasses ? (
          <img
            onClick={toggleGlasses}
            id="secondtp"
            src={maxenceglasses}
            alt="maxence with glasses"
          />
        ) : (
          <img
            onClick={toggleGlasses}
            id="firstp"
            src={maxence}
            alt="maxence"
          />
        )}
      </div>
    </>
  );
}

export default ClickablePicture;
