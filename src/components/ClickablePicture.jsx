
import { useState } from "react";

import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleImage = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? img2 : img1}
      alt="clickable"
      onClick={toggleImage}
      style={{ cursor: "pointer" }}
    />
  );
}

