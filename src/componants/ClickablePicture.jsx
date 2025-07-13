import { useState } from "react";
import maxence from "../assets/maxence.png";
import maxenceGlasses from "../assets/maxence-glasses.png";

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  const toggleImage = () => setHasGlasses(!hasGlasses);

  return (
    <img
      src={hasGlasses ? maxenceGlasses : maxence}
      alt="Clickable"
      onClick={toggleImage}
      className="w-32 cursor-pointer"
    />
  );
}

export default ClickablePicture;
