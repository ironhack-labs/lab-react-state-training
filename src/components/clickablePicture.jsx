import { useState } from "react";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import maxence from "../assets/images/maxence.png";

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  const handlePicture = () => {
    setHasGlasses(!hasGlasses);
  };

  return (
    <div>
      <img
        src={hasGlasses ? maxenceGlasses : maxence}
        alt="maxence"
        onClick={handlePicture}
      />
    </div>
  );
}

export default ClickablePicture;
