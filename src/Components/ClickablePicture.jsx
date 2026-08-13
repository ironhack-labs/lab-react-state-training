import { useState } from "react";

const ClickablePicture = () => {
  const img1 = "src/assets/images/maxence.png";
  const img2 = "src/assets/images/maxence-glasses.png";

  const [imageSource, setImageSource] = useState(img1);

  const handleImageClick = () => {
    imageSource === img1 ? setImageSource(img2) : setImageSource(img1);
  };

  return (
    <div className="clickable-image">
      <img src={imageSource} onClick={handleImageClick} />
    </div>
  );
};

export default ClickablePicture;
