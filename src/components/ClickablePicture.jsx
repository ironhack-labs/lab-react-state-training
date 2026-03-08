import { useState } from "react";
import maxence from "../assets/maxence.png";
import maxenceGlasses from "../assets/maxence-glasses.png";

function ClickablePicture() {
  const [isGlasses, setIsGlasses] = useState(false);

  const handleClick = () => {
    setIsGlasses(!isGlasses);
  };

  return (
    <img
      src={isGlasses ? maxenceGlasses : maxence}
      alt="Maxence"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;