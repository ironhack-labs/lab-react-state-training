import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {

  const [picture, setPicture] = useState(maxence);

  function handleClick() {
    if (picture === maxence) {
      setPicture(maxenceGlasses);
    } else {
      setPicture(maxence);
    }
  }

  return (
    <img
      src={picture}
      alt="clickable"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "250px" }}
    />
  );
}

export default ClickablePicture;