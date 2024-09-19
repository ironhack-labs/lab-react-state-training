import React from "react";
import image from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  const [pic, setPic] = useState(image);
  const togglePics = () => {
    pic === image ? setPic(image2) : setPic(image);
  };

  return (
    <div>
      <button id="toggle-button" onClick={togglePics}>
        <img src={pic} alt="toggle-pic" />
      </button>
    </div>
  );
}

export default ClickablePicture;
