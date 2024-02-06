import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  
    const [isGlassesShown, setIsGlassesShown] = useState(false);
    const toggleGlasses = () => {setIsGlassesShown(!isGlassesShown);};

  return (
    <div className="picture">
      <img
        src={isGlassesShown ? maxenceGlasses : maxence}
        onClick={toggleGlasses}
      />
    </div>
  );
}

export default ClickablePicture;
