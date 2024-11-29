import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <img
      onClick={() => setIsClicked(!isClicked)}
      src={isClicked ? maxenceGlasses : maxence}
    ></img>
  );
};

export default ClickablePicture;
