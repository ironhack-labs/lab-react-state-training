import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxence2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [picture, setPicture] = useState(maxence);
  const togglePicture = () => {
    if (picture === maxence) {
      setPicture(maxence2);
    } else setPicture(maxence);
  };
  return (
    <div>
      <p>Image below</p>
      <img onClick={togglePicture} src={picture} alt="" />
      {/* <img src={maxence2} alt="" /> */}
    </div>
  );
}

export default ClickablePicture;
