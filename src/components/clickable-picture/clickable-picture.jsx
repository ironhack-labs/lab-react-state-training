import { useState } from "react";
import imageWithGlasses from "../../assets/images/maxence-glasses.png";
import imageWithoutGlasses from "../../assets/images/maxence.png";

function ClickablePicture ({ imageOn = imageWithGlasses, imageOff = imageWithoutGlasses, initialState = false}) {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggleImage = () => setIsOn(!isOn);

  return (
    <img src={isOn ? imageOn : imageOff} alt="Profile Picture" onClick={handleToggleImage} />
  );
}

export default ClickablePicture;