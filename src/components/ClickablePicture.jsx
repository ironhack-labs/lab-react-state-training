import React, { useState } from "react";
import firstPicture from "../assets/images/maxence.png";
import secondPicture from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [pic, setPicture] = useState(true);

  const imageSelector = () => {
    setPicture((prevState) => !prevState);
  };

  return (
    <div>
      <img
        src={pic ? firstPicture : secondPicture}
        alt="Toggle Picture"
        onClick={imageSelector}
      />
    </div>
  );
}

export default ClickablePicture;
