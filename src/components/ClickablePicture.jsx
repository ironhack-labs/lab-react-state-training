import { useState } from "react";
import person from "../assets/images/maxence.png";
import glasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [withGlasses, setWithGlasses] = useState(false);

  const handleClick = () => {
    setWithGlasses(!withGlasses);
  };

  return (
    <img
      src={withGlasses ? glasses : person}
      alt="Clickable"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
