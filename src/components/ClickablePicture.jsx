import React, { useState } from "react";
import man from "../assets/images/maxence.png";
import manWithGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [image, setImage] = useState(man);

  const imageClick = () => {
    setImage((prevImage) => (prevImage === man ? manWithGlasses : man));
  };
  return (
    <div>
      <img
        src={image}
        onClick={() => {
          imageClick();
        }}
      />
    </div>
  );
}

export default ClickablePicture;
