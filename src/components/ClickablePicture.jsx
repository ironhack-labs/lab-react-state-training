import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [togglePicture, setTogglePicture] = useState(maxence);

  const handleToggle = () => {
    if (togglePicture === maxence) {
      setTogglePicture (maxenceGlasses)

      if(togglePicture === maxenceGlasses){
        setTogglePicture (maxence)
      }

    }
  };

  return (
    <div className="img-container">
      <img src={togglePicture} onClick={handleToggle}></img>
     
    </div>
  );
}

export default ClickablePicture;
