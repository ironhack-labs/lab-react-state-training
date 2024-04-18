import "./ClickablePicture.css";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  const [isToggled, setIsToggled] = useState(false);

  const imagToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="image-container">
      <img
        src={isToggled ? img2 : img1}
        onClick={imagToggle}
        alt="clickableImage"
      ></img>
    </div>
  );
}

export default ClickablePicture;
