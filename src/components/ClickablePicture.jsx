import withoutGlasses from "../assets/images/maxence.png";
import withGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  return (
    <img
      src={hasGlasses ? withGlasses : withoutGlasses}
      alt="Maxnce"
      onClick={() => setHasGlasses((g) => !g)}
    />
  );
}

export default ClickablePicture;
