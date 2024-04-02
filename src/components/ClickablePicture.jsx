import { useState } from "react";
import picNoGlass from "../assets/images/maxence.png";
import picWithGlass from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [image, setImage] = useState(picNoGlass);

  const toggleImage = () => {
    console.log("click image");
    // Check the current image and switch to the other
    if (image === picNoGlass) {
      setImage(picWithGlass);
    } else {
      setImage(picNoGlass);
    }
  };

  return (
    <div className="image">
      <img
        src={image}
        alt=""
        onClick={toggleImage}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickablePicture;
