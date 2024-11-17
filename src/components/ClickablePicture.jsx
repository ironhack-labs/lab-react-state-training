import { useState } from "react";
import maxenceImage from "../assets/images/maxence.png";
import maxenceGlassesImage from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [image, setImage] = useState(maxenceImage);
  function toggleImage() {
    if (image === maxenceImage) {
      return setImage(maxenceGlassesImage);
    } else {
      return setImage(maxenceImage);
    }
  }
  return (
    <>
      <img onClick={()=>toggleImage()} src={image} />
    </>
  );
}
export default ClickablePicture;
