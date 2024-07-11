import React from "react";
import { useState } from "react";
import image from "../assets/images/maxence.png";
import imageGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isClickable, setIsClickable] = useState(false);

  return (
    <div>
      <img
        src={isClickable ? imageGlasses : image}
        alt="Maxence"
        onClick={() => setIsClickable(!isClickable)}
      />
      <p>{isClickable ? "Image is clickable" : "Image is not clickable"}</p>
    </div>
  );
}

export default ClickablePicture;
