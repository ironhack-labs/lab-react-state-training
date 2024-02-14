import { useState } from "react";
import Image1 from "../assets/images/maxence.png";
import Image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [showImage, setShowImage] = useState(true);

  const toggleImage = () => {
    setShowImage(prevState => !prevState); //preguntar por esta línea, aclarar uso de prevState
  };

  return (
    <div>
      <h2>ClickablePicture</h2>
      <div>
        {showImage ? (
          <img onClick={toggleImage} className="clickableImage" src={Image1} alt="initial-image1" />
        ) : (
          <img onClick={toggleImage} className="clickableImage" src={Image2} alt="initial-image2" />
        )}
      </div>
    </div>
  );
}

export default ClickablePicture;
