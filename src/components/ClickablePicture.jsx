import React, { useState } from "react";
import imgNormal from "../assets/images/maxence.png";
import imgGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <img
      src={clicked ? imgGlasses : imgNormal}
      alt="Clickable"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;