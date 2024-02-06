import { useState } from "react";
import photo from "../assets/images/maxence.png";
import photoGlasses from "../assets/images/maxence-glasses.png";

export const ClickablePicture = () => {
  const [picture, setPicture] = useState(true);

  const handlePhotoClick = () => {
    setPicture(!picture);
  };

  return (
    <div className="photo">
      <button onClick={handlePhotoClick}>
        <img src={picture ? photo : photoGlasses} alt="random guy" />
      </button>
    </div>
  );
};
