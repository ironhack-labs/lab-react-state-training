import React, { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [image, setImage] = useState(image1);

  const toggleImage = () => {
    setImage((prevImage) => (prevImage === image1 ? image2 : image1));
  };

  return (
    <div>
      <img src={image} alt="clickable" onClick={toggleImage} />
    </div>
  );
}

export default ClickablePicture;
