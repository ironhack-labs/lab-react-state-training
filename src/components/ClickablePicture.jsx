// src/components/ClickablePicture.js
import { useState } from "react";

const ClickablePicture = ({ img1, img2 }) => {
  const [image, setImage] = useState(img1);

  const toggleImage = () => {
    setImage(image === img1 ? img2 : img1);
  };

  return (
    <img
      src={image}
      alt="toggle"
      onClick={toggleImage}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ClickablePicture;
