import image from "../assets/images/maxence.png";
import imageGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

export default function ClickablePicture() {
  const [isGlass, setIsGlass] = useState(false);
  return (
    <div>
      <img
        src={isGlass ? imageGlasses : image}
        onClick={() => setIsGlass((isclicked) => !isclicked)}
      />
    </div>
  );
}
