import { useRef } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const imgRef = useRef(null);
  let clicked = false;

  const handleClick = () => {
    clicked = !clicked;
    imgRef.current.src = clicked ? maxenceGlasses : maxence;
  };

  return (
    <img
      ref={imgRef}
      src={maxence}
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;
