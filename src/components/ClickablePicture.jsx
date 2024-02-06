import { useState } from "react";

export default function ClickablePicture() {
  const originalImage = "./src/assets/images/maxence.png";
  const glassesImage = "./src/assets/images/maxence-glasses.png";

  const [image, setImage] = useState(originalImage);

  function toggleImage() {
    setImage((firstImage) => (firstImage === originalImage ? glassesImage : originalImage));
  }

  return <img onClick={toggleImage} src={image} />;
}
