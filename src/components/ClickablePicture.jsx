import { useState } from "react";
import pic1 from "../assets/images/maxence.png"
import pic2 from "../assets/images/maxence-glasses.png"

const ClickablePicture = () => {
    const [currentPicture, setCurrentPicture] = useState(pic1);
  
    const picture = () => {
      setCurrentPicture(currentPicture === pic1 ? pic2 : pic1);
    };
  
    return (
      <div>
        <img
          src={currentPicture}
          alt="Click"
          onClick={picture}
        />
      </div>
    );
  };
  
  export default ClickablePicture;