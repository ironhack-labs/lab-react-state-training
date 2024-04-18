import "../components/Clickable.css";
import { useState } from "react";
import maxenceGlassesImage from "../assets/images/maxence-glasses.png";
import maxenceImage from "../assets/images/maxence.png";

function ClickablePicture() {
  const [showGlasses, setShowGlasses] = useState(false);
  const handleClick = () => setShowGlasses(!showGlasses);

  return (
    <div onClick={handleClick}>
      {showGlasses ? (
        <img src={maxenceImage} alt="glasses" />
      ) : (
        <img src={maxenceGlassesImage} alt="without glasses" />
      )}
    </div>
  );
}

export default ClickablePicture;
