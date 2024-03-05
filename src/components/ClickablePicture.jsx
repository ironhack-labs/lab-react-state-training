import React, { useState } from "react";
import clickPic from "../assets/images/maxence.png";
import glassesPic from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [currentPic, setCurrentPic] = useState(clickPic);

  return (
    <img
      onClick={() =>
        setCurrentPic(currentPic === clickPic ? glassesPic : clickPic)
      }
      src={currentPic}
      alt="clickablePic"
    />
  );
}
