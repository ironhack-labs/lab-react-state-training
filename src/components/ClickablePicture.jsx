import { useState } from "react";
import Maxence from "../assets/images/maxence.png";
import MaxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [imgState, setImgState] = useState(true);
  const imgToggle = () => setImgState(!imgState);
  const imgSource = imgState ? Maxence : MaxenceGlasses;

  return <img onClick={imgToggle} src={imgSource} alt="Young man" />;
}

export default ClickablePicture;
