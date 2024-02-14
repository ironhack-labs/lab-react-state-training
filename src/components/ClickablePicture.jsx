import { useState } from "react";
import manzanillu from "../assets/images/maxence.png";
import manzanilluGafas from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [pictureTransition, setPictureTransition] = useState(manzanillu);
  const handleTransition = () => {
    if (pictureTransition === manzanillu) {
      setPictureTransition(manzanilluGafas);
    } else {
      setPictureTransition(manzanillu);
    }
  };
  return (
    <div>
      <img
        src={pictureTransition}
        alt={pictureTransition}
        onClick={handleTransition}
        width="200px"
      />
    </div>
  );
}

export default ClickablePicture;
