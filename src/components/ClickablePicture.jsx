import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

export default function ClickablePicture() {
  const [picture, setPicture] = useState(maxence);
  function toggleImage() {
    picture === maxence ? setPicture(maxenceGlasses) : setPicture(maxence);
  }
  return (
    <img style={{ cursor: "pointer" }} src={picture} onClick={toggleImage} />
  );
}
