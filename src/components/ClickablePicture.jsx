import React, { useState } from "react";
import defaultImage from "../assets/images/Maxence.png";
import clickedImage from "../assets/images/Maxence-glasses.png";

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <img
        src={isClicked ? clickedImage : defaultImage}
        alt="Clickable Image"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
    </div>
  );
}
export default ClickablePicture;
