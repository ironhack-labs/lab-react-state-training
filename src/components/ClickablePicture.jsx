import maxenceDefault from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  let maxenceImage = maxenceDefault;

  const [imageGlasses, setImageGlasses] = useState(false);

  const glassesState = () => {
    if (!imageGlasses) {
      maxenceImage = maxenceGlasses;
      console.log(maxenceImage);
      setImageGlasses(true);
    } else {
      setImageGlasses(false);
      console.log(maxenceImage);
      maxenceImage = maxenceDefault;
    }
  };

  return (
    <div>
      <img src={maxenceImage} alt="maxence" onClick={glassesState} />
    </div>
  );
}

export default ClickablePicture;
