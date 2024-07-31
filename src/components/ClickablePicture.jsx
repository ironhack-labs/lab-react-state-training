import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(true);

  // Toggle the image on click
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <img
        src={isClicked ? maxence : maxenceGlasses}
        alt="Maxence"
        onClick={handleClick}
      />
    </div>
  );
}
