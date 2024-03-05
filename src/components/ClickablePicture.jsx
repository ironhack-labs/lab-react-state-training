import { useState } from "react";

export const ClickablePicture = () => {
  const [imgWithGlasses, setImgWithGlasses] = useState(false);
  let imgSrc = "../src/assets/images/maxence.png";
  if (imgWithGlasses) {
    imgSrc = "../src/assets/images/maxence.png";
  } else {
    imgSrc = "../src/assets/images/maxence-glasses.png";
  }

  return (
    <>
      <img
        id="imageGlasses"
        src={imgSrc}
        alt="clickable picture"
        onClick={() => setImgWithGlasses(!imgWithGlasses)}
      />{" "}
    </>
  );
};
