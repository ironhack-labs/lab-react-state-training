import { useState } from "react";
import imageWithoutGlasses from "../assets/images/maxence.png";
import imageWithGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [imageClicked, setImageClicked] = useState(false);

  const onClickImage = () => {
    setImageClicked((isClicked) => !isClicked);
  };

  return (
    <>
      {imageClicked ? (<img src={imageWithGlasses} onClick={onClickImage} />
      ) : (
        <img src={imageWithoutGlasses} onClick={onClickImage} />
      )}
    </>
  );
}

export default ClickablePicture;
