import { useState } from "react";

function ClickablePicture() {
  const [glassesImage, setGlassesImage] = useState(false);
  return (
    <img
      onClick={() => setGlassesImage((glassesImage) => !glassesImage)}
      src={
        glassesImage
          ? "src/assets/images/maxence-glasses.png"
          : "src/assets/images/maxence.png"
      }
      alt="image"
    />
  );
}
export default ClickablePicture;