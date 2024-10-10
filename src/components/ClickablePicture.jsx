import { useState } from "react";

export const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);

  const togglePicture = () => {
    if (isClicked) {
      return "/src/assets/images/maxence-glasses.png";
    } else {
      return "/src/assets/images/maxence.png";
    }
  };

  return (
    <div onClick={() => setIsClicked(!isClicked)}>
      <img className="clicked-image" src={togglePicture()} alt="Maxence" />
    </div>
  );
};
