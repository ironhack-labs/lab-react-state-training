import { useState } from "react";

import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isGlasses, setIsGlasses] = useState(false);

  function togglePicture() {
    setIsGlasses(!isGlasses);
  }

  return (
    <img
      src={isGlasses ? maxenceGlasses : maxence}
      alt="Maxence"
      onClick={togglePicture}
    />
  );
}

export default ClickablePicture;