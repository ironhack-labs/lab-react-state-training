import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [image, setImage] = useState(maxence);
  const toggleGlasses = () => {
    if (image === maxence) {
      setImage(maxenceGlasses);
    } else {
      setImage(maxence);
    }
  };
  return (
    <>
      <div>
        <img src={image} onClick={() => toggleGlasses()} />
      </div>
    </>
  );
}

export default ClickablePicture;
