import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  const handleClick = () => {
    setHasGlasses(!hasGlasses);
  };

  return (
    <img
      src={hasGlasses ? maxenceGlasses : maxence}
      alt="Maxence"
      onClick={handleClick}
      className="clickable-picture-img"
    />
  );
}

export default ClickablePicture;
