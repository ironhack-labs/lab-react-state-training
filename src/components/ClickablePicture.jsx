import React, {useState} from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    
  const [currentImage, setCurrentImage] = useState(img1);

  const pictureSwitch = () => {
    setCurrentImage(currentImage === img1 ? img2 : img1);
  };

  return (
    <div className="ClickablePicture">
        <h2>Cickable Picture Time!</h2>
      <img src={currentImage} alt="Clickable image" onClick={pictureSwitch} />
    </div>
  );
}

export default ClickablePicture;