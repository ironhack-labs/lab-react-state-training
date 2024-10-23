import { useState } from "react";

function ClickablePicture({ img1, img2 }) {
  const [currentImage, setCurrentImage] = useState(img1);

  const toggleImage = () => {
    setCurrentImage(currentImage === img1 ? img2 : img1);
  };
  return (
    <img
      src={currentImage}
      alt="toggleable"
      onClick={toggleImage}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
