import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function TogglePicture() {
  const [glasses, setGlasses] = useState(false);

  const togglePicture = () => {
    setGlasses(!glasses); // change the current status
  };

  return (
    <img
      onClick={togglePicture}
      src={glasses ? maxenceGlasses : maxence}
      alt="Maxence"
    />
  );
}

export default TogglePicture;
