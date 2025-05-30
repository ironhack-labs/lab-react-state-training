import { useState } from "react";
import imageWithGlasses from "../assets/images/maxence-glasses.png"
import imageWithoutGlasses from "../assets/images/maxence.png"
 
function ClickablePicture({ imageOn = imageWithGlasses, imageOff = imageWithoutGlasses }) {
  const [isOn, setIsOn] = useState(false)
  
  const handleToggleImage = () => setIsOn(!isOn);
    
  return (
    <img src={isOn ? imageOn : imageOff} alt="ProfilePicture" role="button" onClick={handleToggleImage} className="d-flex p-3 w-25 h-25"/>
  );
}

export default ClickablePicture;