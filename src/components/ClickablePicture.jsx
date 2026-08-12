import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [showGlasses, setShowGlasses] = useState(false);

  function handleClick() {
    setShowGlasses(!showGlasses);
  }

  return (
    <img
      src={showGlasses ? maxenceGlasses : maxence}
      alt="Maxence"
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;