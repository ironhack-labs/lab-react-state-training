import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [picture, setPicture] = useState(maxence);

  function handleClick() {
    setPicture((currentPicture) => {
      if (currentPicture === maxence) {
        return maxenceGlasses;
      } else {
        return maxence;
      }
    });
  }
  return <img src={picture} onClick={handleClick}></img>;
}

export default ClickablePicture;
