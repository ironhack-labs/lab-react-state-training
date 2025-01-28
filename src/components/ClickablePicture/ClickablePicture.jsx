import { useState } from "react";
import img1 from "../assets/picture1.png";
import img2 from "../assets/picture2.png";

function ClickablePicture() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  return (
    <img
      src={isFirstImage ? img1 : img2}
      alt="Clickable"
      onClick={() => setIsFirstImage(!isFirstImage)}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
