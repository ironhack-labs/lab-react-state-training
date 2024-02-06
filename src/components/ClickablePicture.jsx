import maxenceDefault from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  
  const [imageGlasses, setImageGlasses] = useState(false);
  
  const toggleGlasses = () => {
    setImageGlasses(!imageGlasses);
  };
  let imgSrc = imageGlasses ? maxenceGlasses : maxenceDefault 

  return (
    <div>
      <img src={imgSrc} alt="maxence" onClick={toggleGlasses} />
    </div>
  );
}

export default ClickablePicture;
