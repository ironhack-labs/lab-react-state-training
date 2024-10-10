import React from "react";
import { useState } from "react";
import myImage from "../assets/images/maxence.png";
import myImageClicked from "../assets/images/maxence-glasses.png";
function ClickablePicture() {
  const [clicked, setClicked] = useState(false);
  return (
    <button onClick={() => setClicked(!clicked)}>
      <img src={clicked ? myImage : myImageClicked} />
    </button>
  );
}

export default ClickablePicture;
