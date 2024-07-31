import { useState } from "react";
import maxenceGlasses from "../images/maxence-glasses.png";
import maxence from "../images/maxence.png";

function ClicklablePicture() {
  const [picture, setPicture] = useState(true);

  const handleToggle = () => {
    setPicture(!picture);
  };

  return (
    <div>
      <img
        src={picture ? maxence : maxenceGlasses}
        alt="toggleable picture"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClicklablePicture;
