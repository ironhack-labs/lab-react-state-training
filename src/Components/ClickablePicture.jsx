import { useState } from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [isGlassesOn, setIsGlassesOn] = useState(true);

  const toggleGlasses = () => {
    setIsGlassesOn((prev) => !prev);
  };

  return (
    <div>
      <img
        src={isGlassesOn ? img1 : img2}
        alt="Swamp Img"
        onClick={toggleGlasses}
      />
    </div>
  );
}
