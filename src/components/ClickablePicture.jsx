import { useState } from "react";

import maxence from "../assets/maxence.png";
import maxenceGlasses from "../assets/maxence-glasses.png";

function ClickablePicture() {
  const [isGlasses, setIsGlasses] = useState(false);

  function togglePicture() {
    setIsGlasses(!isGlasses);
  }

  return (
    <img
      src={isGlasses ? maxenceGlasses : maxence}
      alt="Maxence"
      width="200"
      onClick={togglePicture}
    />
  );
}

export default ClickablePicture;