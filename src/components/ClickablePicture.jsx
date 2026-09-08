import { useState } from "react";

import imgNormal from "../assets/images/maxence.png";
import imgGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  const toggleGlasses = () => {
    setHasGlasses(!hasGlasses);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <img
        src={hasGlasses ? imgGlasses : imgNormal}
        alt="Clickable"
        onClick={toggleGlasses}
        style={{ cursor: "pointer", width: "200px" }}
      />
    </div>
  );
}

export default ClickablePicture;