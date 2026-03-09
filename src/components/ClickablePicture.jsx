import { useState } from "react";

function ClickablePicture() {
  const [isGlasses, setIsGlasses] = useState(false);

  return (
    <img
      onClick={() => setIsGlasses(!isGlasses)}
      src={
        isGlasses
          ? "/src/assets/images/maxence-glasses.png"
          : "/src/assets/images/maxence.png"
      }
      alt="clickable"
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
