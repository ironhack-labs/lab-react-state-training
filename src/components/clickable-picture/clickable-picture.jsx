import { useState } from "react";
import imageWithGlasses from "../../assets/images/maxence-glasses.png";
import imageWithoutGlasses from "../../assets/images/maxence.png";

function ClickablePicture ({ imageOn = imageWithGlasses, imageOff = imageWithoutGlasses, initialState = false}) {
  const [isOn, SetIsOn] = useState(initialState);

  const handleToggleImage = () => SetIsOn(!isOn);

  return (
    <img src={isOn ? imageOn : imageOff} alt="Profile Picture" onClick={handleToggleImage} />
  );
}

export default ClickablePicture;